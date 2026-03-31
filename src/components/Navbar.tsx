"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height && id) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = document.getElementById("navbar")?.offsetHeight || 0;
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-1000 transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(253,248,243,0.95)] backdrop-blur-xl py-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className={`font-[var(--font-heading)] text-[1.8rem] font-semibold tracking-[2px] transition-colors ${
            scrolled ? "text-[var(--color-brown-dark)]" : "text-white"
          }`}
        >
          R <span className="text-[var(--color-gold)] italic mx-1">&</span> L
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[1001]"
          aria-label="Toggle navigation"
        >
          <span
            className={`w-6 h-[2px] rounded-[2px] transition-colors ${
              scrolled ? "bg-[var(--color-brown-dark)]" : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-[2px] rounded-[2px] transition-colors ${
              scrolled ? "bg-[var(--color-brown-dark)]" : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-[2px] rounded-[2px] transition-colors ${
              scrolled ? "bg-[var(--color-brown-dark)]" : "bg-white"
            }`}
          />
        </button>

        {/* Nav menu */}
        <ul
          className={`md:flex md:gap-9 ${
            menuOpen
              ? "fixed top-0 right-0 w-[280px] h-screen bg-[var(--color-cream)] flex-col pt-[100px] px-10 pb-10 gap-6 shadow-[-4px_0_30px_rgba(0,0,0,0.1)]"
              : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`font-[var(--font-body)] text-[0.8rem] font-medium tracking-[2px] uppercase relative py-1 transition-colors after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--color-gold)] after:transition-[width] after:duration-300 hover:after:w-full hover:text-[var(--color-gold)] ${
                  scrolled || menuOpen
                    ? "text-[var(--color-text)]"
                    : "text-[rgba(255,255,255,0.85)]"
                } ${activeSection === link.href.slice(1) ? "after:w-full" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
