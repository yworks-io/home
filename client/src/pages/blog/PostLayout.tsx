import { Link } from "wouter";

interface PostLayoutProps {
  date: string;
  title: string;
  children: React.ReactNode;
}

export default function PostLayout({ date, title, children }: PostLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-14">
          <Link href="/">
            <a><img src="/images/yworks-logo.webp" alt="YWorks" className="h-8 w-auto invert brightness-200" /></a>
          </Link>
          <Link href="/blog">
            <a className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">← blog</a>
          </Link>
        </div>
      </nav>

      <article className="container max-w-2xl pt-28 pb-24">
        <header className="mb-12">
          <div className="text-xs text-primary font-mono mb-3">{date}</div>
          <h1 className="text-2xl md:text-3xl font-bold font-mono leading-snug">{title}</h1>
          <div className="w-12 h-px bg-primary mt-4"></div>
        </header>

        <div className="prose-yibot">{children}</div>
      </article>
    </div>
  );
}
