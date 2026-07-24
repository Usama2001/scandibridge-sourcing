"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, copy } = useLanguage();

  const nav = [
    { to: "/", label: copy.nav.home, end: true },
    { to: "/about", label: copy.nav.about },
    { to: "/products", label: copy.nav.products },
    { to: "/contact", label: copy.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button className={language === "sv" ? "selected" : ""} onClick={() => setLanguage("sv")} aria-pressed={language === "sv"}>SV</button>
            <span aria-hidden="true">|</span>
            <button className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </div>
          <Link className="button button--small desktop-quote" to="/contact?type=quote">{copy.nav.quote}</Link>
          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={copy.nav.menu} aria-expanded={open} aria-controls="mobile-nav">
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
          <div className="container">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                {item.label}
              </NavLink>
            ))}
            <Link className="button" to="/contact?type=quote" onClick={() => setOpen(false)}>{copy.nav.quote}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
