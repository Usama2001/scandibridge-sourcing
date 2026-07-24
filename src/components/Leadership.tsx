import { MapPin } from "lucide-react";
import { company } from "../config/company";
import { useLanguage } from "../i18n/LanguageContext";

export function Leadership() {
  const { language } = useLanguage();
  return (
    <div className="leadership-grid">
      {company.leadership.map((leader) => (
        <article className="leader-card" key={leader.name}>
          <div className="avatar" aria-hidden="true">{leader.initials}</div>
          <div>
            <h3>{leader.name}</h3>
            <p className="leader-role">{leader.role[language]}</p>
            <p className="leader-location"><MapPin size={16} aria-hidden="true" /> {leader.location}</p>
            <p>{leader.description[language]}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
