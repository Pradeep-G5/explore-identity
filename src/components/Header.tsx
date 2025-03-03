
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CommandDialog, CommandInput, CommandList } from "@/components/ui/command";
import ThemeToggle from "./ThemeToggle";
import CommandPalette from "./CommandPalette";
import { Menu, X } from "lucide-react";
import { playSoundEffect } from "./SoundEffects";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Activity", href: "/activity" },
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
        playSoundEffect("command");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    playSoundEffect("click");
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 lg:px-24",
        isScrolled
          ? "py-4 glass"
          : "py-6 bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <Link 
          to="/" 
          className="font-bold text-xl tracking-tight"
          onClick={() => playSoundEffect("click")}
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors link-hover",
                location.pathname === item.href && "text-primary font-semibold"
              )}
              onClick={() => playSoundEffect("click")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setCommandOpen(true);
              playSoundEffect("command");
            }}
            className="p-2 rounded-lg text-sm flex items-center gap-2 bg-secondary/60 hover:bg-secondary transition-colors duration-200"
          >
            <span className="hidden md:inline-block">Search...</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 text-[10px] font-medium opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="block md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 animate-fade-in">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "block py-2 text-base",
                    location.pathname === item.href && "text-primary font-semibold"
                  )}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    playSoundEffect("click");
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <CommandPalette open={commandOpen} setOpen={setCommandOpen} />
    </header>
  );
}
