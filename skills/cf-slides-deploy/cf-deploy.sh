#!/bin/bash
# cf-deploy.sh — 部署 HTML slides 到 Cloudflare Pages + 自动配置 Access 保护
# 用法:
#   ./tools/cf-deploy.sh <html文件> <项目名> [public|private]
#
# 示例:
#   ./tools/cf-deploy.sh ontology-slides.html ontology-slides private
#   ./tools/cf-deploy.sh public-deck.html public-deck public

set -e

HTML_FILE="${1}"
PROJECT_NAME="${2}"
MODE="${3:-private}"  # 默认 private

CF_TOKEN=$(cat ~/.config/cloudflare/api-token)
ACCOUNT_ID="375c420aa195f25a2b8dafbc160c81ba"
DEPLOY_DIR="/tmp/cf-deploy-$$"

# 检查参数
if [[ -z "$HTML_FILE" || -z "$PROJECT_NAME" ]]; then
  echo "用法: $0 <html文件> <项目名> [public|private]"
  exit 1
fi

if [[ ! -f "$HTML_FILE" ]]; then
  echo "❌ 文件不存在: $HTML_FILE"
  exit 1
fi

echo "🚀 部署 $HTML_FILE → $PROJECT_NAME ($MODE)"

# 准备部署目录
mkdir -p "$DEPLOY_DIR"
cp "$HTML_FILE" "$DEPLOY_DIR/index.html"

# 部署到 Cloudflare Pages
echo "📦 上传到 Cloudflare Pages..."
npx wrangler pages deploy "$DEPLOY_DIR" --project-name "$PROJECT_NAME" 2>&1

# 清理
rm -rf "$DEPLOY_DIR"

URL="https://${PROJECT_NAME}.pages.dev"

# 配置 Access 保护
if [[ "$MODE" == "private" ]]; then
  echo "🔒 配置 Email 验证保护..."

  # 检查是否已有 Access App
  EXISTING=$(curl -s "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/access/apps" \
    -H "Authorization: Bearer $CF_TOKEN" | \
    jq -r ".result[] | select(.domain == \"${PROJECT_NAME}.pages.dev\") | .id")

  if [[ -n "$EXISTING" ]]; then
    echo "✅ Access App 已存在 ($EXISTING)，跳过创建"
    APP_ID="$EXISTING"
  else
    # 创建 Access App
    APP=$(curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/access/apps" \
      -H "Authorization: Bearer $CF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "{
        \"name\": \"$PROJECT_NAME\",
        \"domain\": \"${PROJECT_NAME}.pages.dev\",
        \"type\": \"self_hosted\",
        \"session_duration\": \"24h\",
        \"auto_redirect_to_identity\": false
      }")

    APP_ID=$(echo $APP | jq -r '.result.id')
    if [[ "$APP_ID" == "null" || -z "$APP_ID" ]]; then
      echo "❌ 创建 Access App 失败:"
      echo $APP | jq '.errors'
      exit 1
    fi

    # 添加 Email OTP 策略
    curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/access/apps/$APP_ID/policies" \
      -H "Authorization: Bearer $CF_TOKEN" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "Email OTP",
        "decision": "allow",
        "include": [{"email": {"email": "dennywang.singapore@gmail.com"}}, {"email": {"email": "yibot2026@gmail.com"}}],
        "require": [],
        "exclude": [],
        "precedence": 1
      }' > /dev/null

    echo "✅ Access 保护已启用"
  fi

  echo ""
  echo "🔒 私有链接: $URL"
  echo "   访客需输入 email → 收验证码 → 进入"
else
  echo ""
  echo "🌐 公开链接: $URL"
fi
