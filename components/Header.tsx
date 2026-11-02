"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link href="/" className="logoLink" aria-label="NextGen Junk home">
          <Image
            src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
            alt="NextGen Junk"
            width={410}
            height={210}
            className="headerLogo"
            priority
          />
        </Link>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "navActive" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="button buttonGradient buttonSmall headerQuote" href="/contact">
          Free Quote
        </Link>

        <button
          className="menuButton"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="mobileNav" aria-label="Mobile navigation">
          <div className="shell mobileNavInner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mobileNavContacts">
              <a href="tel:+15306808652">Logan — (530) 680-8652</a>
              <a href="tel:+17753868276">Michael — (775) 386-8276</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
