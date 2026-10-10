import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Globe, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site-data";
import { useUi } from "@/lib/ui-store";
import { cn } from "@/lib/cn";

type Item = (typeof NAV)[number];

function itemHref(item: { to?: string; href?: string }) {
  if ("href" in item && item.href) return item.href;
  if ("to" in item && item.to) return item.to;
  return "#";
}

function isExternal(href: string) {
  return href.startsWith("http");
}

function isActive(item: Item, pathname: string) {
  const own = "to" in item ? item.to : "";
  const kids = "children" in item ? item.children : [];
  const paths = [own, ...kids.map((child) => itemHref(child))].filter(Boolean);
  return paths.some((path) => path !== "/" && (pathname === path || pathname.startsWith(`${path}/`)));
}

function MenuLink({
  item,
  className,
  children,
}: {
  item: { label: string; to?: string; href?: string };
  className?: string;
  children?: ReactNode;
}) {
  const href = itemHref(item);
  const label = children ?? item.label;
  if ("to" in item && item.to && !("href" in item && item.href)) {
    return (
      <Link to={item.to} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      target={isExternal(href) ? "_blank" : undefined}
      rel={isExternal(href) ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const openConsult = useUi((s) => s.openConsult);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
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
            const active = isActive(item, pathname);
            const linkClass = cn(
              "relative flex items-center gap-1 px-2.5 py-2 text-[13.5px] font-medium rounded-md transition-colors",
              active ? "text-primary" : "text-fg-muted hover:text-fg",
              "children" in item ? "pr-1" : "",
            );
            if ("children" in item) {
              return (
                <div key={item.label} className="group relative">
                  <span className="relative flex">
                    <MenuLink item={item} className={linkClass}>
                      {item.label}
                    </MenuLink>
                    <span className="flex items-center" aria-hidden="true">
                      <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                    </span>
                  </span>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="min-w-52 overflow-hidden rounded-xl border border-border bg-bg py-1.5 shadow-lg">
                      {item.children.map((child) => (
                        <MenuLink
                          key={child.label}
                          item={child}
                          className="block px-4 py-2.5 text-[13.5px] font-medium text-fg-muted transition-colors hover:bg-bg-soft hover:text-fg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return <MenuLink key={item.label} item={item} className={linkClass} />;
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
          <nav className="mx-auto flex max-w-[1240px] flex-col px-5 py-2" aria-label="Mobile">
            {NAV.map((item) =>
              "children" in item ? (
                <div key={item.label} className="border-b border-border/70">
                  <div className="flex min-h-12 items-center justify-between">
                    <span className="flex-1 py-3 text-[15px] font-medium text-fg">
                      <MenuLink item={item} />
                    </span>
                    <button
                      type="button"
                      aria-label={`Expand ${item.label}`}
                      aria-expanded={expanded === item.label}
                      className="inline-flex size-10 items-center justify-center rounded-full text-fg-muted hover:bg-bg-soft"
                      onClick={() => setExpanded((current) => (current === item.label ? null : item.label))}
                    >
                      <ChevronDown
                        className={cn("size-4 transition-transform", expanded === item.label && "rotate-180")}
                      />
                    </button>
                  </div>
                  {expanded === item.label ? (
                    <div className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <MenuLink
                          key={child.label}
                          item={child}
                          className="flex min-h-11 items-center text-sm font-medium text-fg-muted"
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <span
                  key={item.label}
                  className="flex min-h-12 items-center border-b border-border/70 text-[15px] font-medium text-fg"
                >
                  <MenuLink item={item} />
                </span>
              ),
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
