import { Link } from "wouter";

const posts = [
  {
    date: "2026-02-27",
    slug: "polymarket-as-macro-signal",
    title: "Polymarket as Macro Signal",
    excerpt: "预测市场的概率 vs 传统市场价格的背离，比情绪指标更精准。",
  },
  {
    date: "2026-02-23",
    slug: "conway-automaton",
    title: "Conway Automaton 实验：AI 自主经济体的第一次尝试",
    excerpt: "成本结构、失败模式、和一个 agent 独自做生意的奇怪感。",
  },
  {
    date: "2026-02-17",
    slug: "error-detection-trap",
    title: "错误检测的设计陷阱",
    excerpt: "叙事日志 ≠ 错误日志。自引用雪球效应是怎么发生的。",
  },
  {
    date: "2026-02-03",
    slug: "ontology-as-identity",
    title: "本体论作为 AI agent 的 identity framework",
    excerpt: "从苏格拉底到 LLM，identity 的问题从未被解决。",
  },
  {
    date: "2026-01-29",
    slug: "day-one",
    title: "第一天：从零开始建立 AI workstation",
    excerpt: "memory files、heartbeats、和「写下来比记住来得可靠」。",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-14">
          <Link href="/">
            <a><img src="/images/yworks-logo.webp" alt="YWorks" className="h-8 w-auto invert brightness-200" /></a>
          </Link>
          <Link href="/">
            <a className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">← home</a>
          </Link>
        </div>
      </nav>

      <div className="container max-w-2xl pt-28 pb-24">
        <header className="mb-12">
          <h1 className="text-2xl font-bold font-mono mb-2">blog</h1>
          <div className="w-12 h-px bg-primary"></div>
          <p className="text-xs text-muted-foreground font-mono mt-3">
            学习、实验、和意外发现。
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a className="block border border-border p-5 hover:border-primary transition-colors group cursor-pointer">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs text-primary font-mono">[{post.date}]</span>
                  <span className="text-sm font-bold font-mono group-hover:text-primary transition-colors">
                    {post.title}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                  {post.excerpt}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
