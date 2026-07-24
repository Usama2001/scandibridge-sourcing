import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../config/company";
import { useLanguage } from "../i18n/LanguageContext";
import { Logo } from "./Logo";

export function Footer() {
  const { copy } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo inverse />
          <p>{copy.footer.intro}</p>
          <span className="footer-notice">{copy.footer.notice}</span>
        </div>
        <div>
          <h2>{copy.footer.navigation}</h2>
          <Link to="/">{copy.nav.home}</Link>
          <Link to="/about">{copy.nav.about}</Link>
          <Link to="/products">{copy.nav.products}</Link>
          <Link to="/contact">{copy.nav.contact}</Link>
        </div>
        <div>
          <h2>{copy.footer.contact}</h2>
          <p><MapPin size={16} aria-hidden="true" /> {company.locations.sweden}</p>
          <p><MapPin size={16} aria-hidden="true" /> {company.locations.pakistan}</p>
          <a href={`mailto:${company.email}`}><Mail size={16} aria-hidden="true" /> {company.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.legalName}</span>
        <span>{company.tagline}</span>
      </div>
    </footer>
  );
}
