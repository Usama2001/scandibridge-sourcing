import { BadgeCheck, Boxes, ClipboardCheck, Globe2, HeartHandshake, Tags } from "lucide-react";
import { Link } from "react-router-dom";
import { Leadership } from "../components/Leadership";
import { SectionHeading } from "../components/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";

export function AboutPage() {
  const { copy } = useLanguage();
  const cards = [
    [Globe2, copy.about.modelTitle, copy.about.modelText],
    [HeartHandshake, copy.about.missionTitle, copy.about.missionText],
    [BadgeCheck, copy.about.approachTitle, copy.about.approachText],
    [ClipboardCheck, copy.about.qualityTitle, copy.about.qualityText],
    [Boxes, copy.about.supplierTitle, copy.about.supplierText],
    [Tags, copy.about.labelTitle, copy.about.labelText],
  ] as const;

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">{copy.about.eyebrow}</p>
          <h1>{copy.about.title}</h1>
          <p>{copy.about.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          {cards.map(([Icon, title, text]) => (
            <article className="about-card" key={title}>
              <Icon aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="container documentation-note"><ClipboardCheck aria-hidden="true" /><p>{copy.about.documentation}</p></div>
      </section>
      <section className="section section--dark">
        <div className="container why-grid">
          <SectionHeading light title={copy.about.whyTitle} />
          <ul>
            {copy.about.reasons.map((reason) => <li key={reason}><span>✓</span>{reason}</li>)}
          </ul>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionHeading title={copy.about.leadershipTitle} />
          <Leadership />
        </div>
      </section>
      <section className="section compact-cta">
        <div className="container">
          <div><h2>{copy.about.ctaTitle}</h2><p>{copy.about.ctaText}</p></div>
          <Link className="button" to="/contact">{copy.common.requestQuote}</Link>
        </div>
      </section>
    </main>
  );
}
