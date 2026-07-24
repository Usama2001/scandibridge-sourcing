import { ArrowRight, Building2, Check, Factory, Handshake, PackageCheck, Shirt, Sparkles, Store, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { Leadership } from "../components/Leadership";
import { SectionHeading } from "../components/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";

const serveIcons = [Store, Building2, UtensilsCrossed, Sparkles, PackageCheck, Shirt];

export function HomePage() {
  const { copy } = useLanguage();
  const assetBase = import.meta.env.BASE_URL || "/";
  return (
    <main>
      <section className="hero">
        <img className="hero-bg" src={`${assetBase}hero-logistics.jpg`} alt="" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">{copy.home.eyebrow}</p>
          <h1>{copy.home.title}</h1>
          <p className="hero-intro">{copy.home.intro}</p>
          <div className="button-row">
            <Link className="button" to="/contact?type=quote">{copy.common.requestQuote}</Link>
            <Link className="button button--ghost" to="/products">{copy.common.viewProducts}</Link>
          </div>
          <div className="hero-route" aria-label="Stockholm to global production markets">
            <span>Stockholm</span><i /><span>Lahore</span><i /><span>Global production</span>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <SectionHeading title={copy.home.trustTitle} intro={copy.home.trustIntro} />
          <div className="trust-grid">
            {copy.home.trust.map((item, index) => (
              <article key={item}><span>0{index + 1}</span><Check aria-hidden="true" /><h3>{item}</h3></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading title={copy.home.serveTitle} intro={copy.home.serveIntro} />
          <div className="serve-grid">
            {copy.home.serve.map((item, index) => {
              const Icon = serveIcons[index];
              return <article key={item}><Icon aria-hidden="true" /><h3>{item}</h3></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading title={copy.home.howTitle} />
          <ol className="process-grid">
            {copy.home.steps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container featured-grid">
          <div className="featured-image">
            <img src={`${assetBase}hero-logistics.jpg`} alt="" loading="lazy" />
            <div className="featured-badge"><Factory aria-hidden="true" /><span>B2B</span></div>
          </div>
          <div>
            <p className="eyebrow">{copy.home.featuredLabel}</p>
            <h2>{copy.home.featuredTitle}</h2>
            <p>{copy.home.featuredText}</p>
            <Link className="button button--dark" to="/products/towels">{copy.common.exploreTowels}<ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading title={copy.home.leadershipTitle} intro={copy.home.leadershipIntro} />
          <Leadership />
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <Handshake size={50} aria-hidden="true" />
          <div><h2>{copy.home.ctaTitle}</h2><p>{copy.home.ctaText}</p></div>
          <div className="button-row">
            <Link className="button" to="/contact?type=quote">{copy.common.requestQuote}</Link>
            <Link className="button button--ghost" to="/contact?type=sample">{copy.common.requestSample}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
