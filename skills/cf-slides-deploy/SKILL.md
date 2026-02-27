# cf-slides-deploy

一键把单页 HTML 部署到 Cloudflare Pages，支持公开访问或 Email OTP 保护。

## 适用场景

- 分享 slides / 讲座 / 演示页面
- 需要快速上线但不想搭服务器
- 内部分享（Email 验证保护）或公开发布

## 前置条件

1. Cloudflare 账号 + API Token（需要 Pages 权限）
2. 安装 `wrangler`：`npm install -g wrangler`
3. 安装 `jq`：`brew install jq`
4. Token 存放：`~/.config/cloudflare/api-token`

## 使用方法

```bash
./cf-deploy.sh <html文件> <项目名> [public|private]
```

**公开部署：**
```bash
./cf-deploy.sh my-slides.html my-slides public
# → https://my-slides.pages.dev
```

**私有部署（Email OTP 保护）：**
```bash
./cf-deploy.sh my-slides.html my-slides private
# → https://my-slides.pages.dev
# 访客需输入 email，收验证码才能进入
```

## 效果

- 部署完成立即可访问，URL 格式：`https://<项目名>.pages.dev`
- private 模式：Cloudflare Access 自动配置，Email OTP 验证
- 重复部署同一项目名 = 直接覆盖更新

## 配置 Access 允许的邮箱

编辑脚本里 `include` 字段，加入允许访问的 email 地址。

## 注意

- 只支持单页 HTML（无外部资源依赖）
- Cloudflare Pages 免费额度足够个人使用
- `pages.dev` wildcard 不支持 Access 统一保护，需按项目逐个配置
