import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site-data";
import { useUi } from "@/lib/ui-store";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const openConsult = useUi((s) => s.openConsult);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-bg/90 backdrop-blur-md transition-[box-shadow] duration-200",
        scrolled ? "shadow-[var(--shadow-header)]" : "shadow-none",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4 px-5 lg:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {NAV.map((item) => {
            if ("href" in item) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative px-2 py-2 text-[13px] font-medium rounded-md text-fg-muted transition-colors hover:text-fg xl:px-2.5 xl:text-[13.5px]"
                >
                  {item.label}
                </a>
              );
            }
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-2 py-2 text-[13px] font-medium rounded-md transition-colors xl:px-2.5 xl:text-[13.5px]",
                  active ? "text-primary" : "text-fg-muted hover:text-fg",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden sm:inline-flex size-10 items-center justify-center rounded-full text-fg-muted hover:bg-bg-soft hover:text-fg"
            aria-label="Language"
            title="English"
          >
            <Globe className="size-[18px]" strokeWidth={1.8} />
          </button>
          <Button size="sm" className="pr-3.5 max-sm:h-10 max-sm:px-3 max-sm:text-xs" onClick={openConsult}>
            Let's Talk
            <ArrowRight className="size-4" strokeWidth={2.2} />
          </Button>
          <button
            type="button"
            className="lg:hidden inline-flex size-11 items-center justify-center rounded-full text-fg hover:bg-bg-soft"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-border bg-bg">
          <nav className="mx-auto flex max-w-[1240px] flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item) =>
              "href" in item ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-12 items-center border-b border-border/70 text-[15px] font-medium text-fg"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-12 items-center border-b border-border/70 text-[15px] font-medium text-fg"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
