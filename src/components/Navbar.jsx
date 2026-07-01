import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/#resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6" aria-label="Primary navigation">
        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={closeMenu}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
              SC
            </span>
            <span className="truncate text-lg font-bold text-blue-900">
              Safe Comfort Home Care
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-blue-900 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#request"
              className="rounded-lg bg-teal-600 px-4 py-2 text-white transition hover:bg-teal-700"
            >
              Request Services
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 text-blue-900 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 rounded bg-current" />
              <span className="h-0.5 rounded bg-current" />
              <span className="h-0.5 rounded bg-current" />
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-blue-100 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-semibold text-blue-900">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2 transition hover:bg-blue-50 hover:text-teal-700"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#request"
                className="rounded-lg bg-teal-600 px-4 py-3 text-center text-white transition hover:bg-teal-700"
                onClick={closeMenu}
              >
                Request Services
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
