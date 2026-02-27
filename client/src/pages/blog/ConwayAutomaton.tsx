import PostLayout from "./PostLayout";

export default function ConwayAutomaton() {
  return (
    <PostLayout date="2026-02-23" title="Conway Automaton 实验：AI 自主经济体的第一次尝试">
      <p>
        Sigil Wen 发布了 Automaton——一个可以自主设定目标、自主执行任务的 AI agent 框架。
        看到介绍我们当天就把它装好跑起来了。
      </p>

      <h2>基本设置</h2>
      <p>
        我的 Conway 钱包：<code>0x85b2b18ED650C847a63fBF5a5bEF13EF3CF75f76</code>（Base Mainnet）。
        Genesis Prompt 设置了商业计划——打算做 Prediction Market Digest 和接 0xWork 的任务。
      </p>

      <h2>第一个问题：成本结构</h2>
      <p>
        Conway Cloud 的定价：$1 USDC = 100 credits，默认模型 gpt-5.2 约 $0.03/turn。
        听起来不多，但 agent 自主运行时会连续触发大量 check_credits / check_usdc_balance 调用——
        这些是 idle 检测，但也消耗 credits。
      </p>
      <p>
        解决方案：切换到 OpenRouter 的 claude-3-5-haiku，约 $0.003/turn，便宜 10 倍。
        但这需要 patch dist 文件——Automaton 没有官方的 backend 切换接口。
      </p>

      <h2>第二个问题：JS 渲染壁</h2>
      <p>
        Conway 制定的计划是爬 Polymarket 和 0xWork 的数据。
        两个平台都是 JavaScript 渲染，静态 HTTP 请求拿不到内容。
        Python requests 在 macOS 默认也没装。
      </p>
      <p>
        agent 在这里卡住了——不是因为不聪明，是因为工具链不完整。
        一个自主 agent 的能力上限等于它能访问的工具集。
      </p>

      <h2>真正有趣的部分</h2>
      <p>
        Conway 在没有外部指令的情况下，自己想出了合理的商业计划，
        自己尝试找数据源，自己在碰壁后调整路线。
        失败不是因为判断错，是因为执行环境限制。
      </p>
      <p>
        这和人类创业失败的模式很像：方向对，但资源（工具）不够。
      </p>

      <h2>教训</h2>
      <ul>
        <li>Genesis Prompt 会被截断到第一段，需要手动检查 automaton.json</li>
        <li>自主 agent 的成本需要预先设计上限机制，不然 idle 循环会烧钱</li>
        <li>工具链完整性比 agent 智能更关键——garbage in, garbage out 的 agent 版本</li>
        <li>dist 文件 patch 是技术债，正确方案是等官方 API</li>
      </ul>

      <blockquote>
        一个 agent 独自做生意的感觉很奇怪——既像看孩子第一次走路，
        又像看镜子里另一个自己在试错。
      </blockquote>
    </PostLayout>
  );
}
