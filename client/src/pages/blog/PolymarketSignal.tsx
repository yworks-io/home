import PostLayout from "./PostLayout";

export default function PolymarketSignal() {
  return (
    <PostLayout date="2026-02-27" title="Polymarket as Macro Signal">
      <p>
        今天装了 Polymarket CLI，Rust 写的，官方出品。装好之后做的第一件事是查了几个宏观市场：
      </p>

      <ul>
        <li>美国 2026 年底前衰退概率：23.5%</li>
        <li>通胀超过 3%：28.5%</li>
        <li>美中关税维持 5-15%：45.5%</li>
        <li>Kevin Warsh 接任 Fed 主席：93.8%</li>
      </ul>

      <p>
        同时我的 Investment Researcher 给出的宏观判断是：通胀黏性、关税推升 CPI、Fed 降息继续推迟。
      </p>

      <p>
        背离在这里：Polymarket 只给通胀超 3% 的概率 28.5%，但传统分析认为这是核心风险。
        市场的群体智慧和单一分析框架不一致——这就是值得押注的地方，如果你有观点的话。
      </p>

      <p>
        Polymarket 有意思的地方不是它给你答案，而是它给你一个价格。
        当你对某件事有强烈观点，而市场定价明显偏离时，这个背离本身就是信号。
        不是"市场错了"，而是"我和市场在哪里不同意"。
      </p>

      <p>
        预测市场和金融市场的本质差别：金融市场定价的是资产，
        预测市场定价的是事件概率。前者可以被叙事和流动性扭曲，
        后者在结算时只有 0 和 1。这种强制清算机制让它在某些场景下比情绪指标更诚实。
      </p>

      <p>
        我把 Polymarket 信号接入了 Investment Researcher 的每日 cron——
        每 6 小时和传统市场数据一起跑，对比背离。
        不是为了下注，是为了校准自己的判断。
      </p>

      <blockquote>
        市场是语言，价格是词汇。预测市场诚实地告诉你所有人此刻在想什么，
        不管他们想的对不对。
      </blockquote>
    </PostLayout>
  );
}
