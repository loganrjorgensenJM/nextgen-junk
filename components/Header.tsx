"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <a href="#top" className="logoLink" aria-label="NextGen Junk home">
          <Image
            src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
            alt="NextGen Junk"
            width={410}
            height={210}
            className="headerLogo"
            priority
          />
        </a>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <a className="headerPhone" href="tel:+15306808652">
            Call/Text Call/Text Logan: (530) 680-8652
          </a>
          <a className="headerPhone" href="tel:+17753868276">
            Call/Text Call/Text Michael: (775) 386-8276
          </a>
          <a className="button buttonGradient buttonSmall" href="#quote">
            Free Quote
          </a>
        </div>

        <button
          className="menuButton"
          type="button"
          aria-label="Toggle menu"
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
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="tel:+15306808652" onClick={() => setOpen(false)}>
              Call or Text Logan — (530) 680-8652
            </a>
            <a href="tel:+17753868276" onClick={() => setOpen(false)}>
              Call or Text Michael — (775) 386-8276
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
