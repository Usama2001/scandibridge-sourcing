import { SectionHeading } from "../components/SectionHeading";
import { TowelGrid } from "../components/TowelGrid";
import { useLanguage } from "../i18n/LanguageContext";

export function ProductsPage() {
  const { copy } = useLanguage();
  return (
    <main>
      <section className="page-hero page-hero--products">
        <div className="container narrow">
          <p className="eyebrow">{copy.products.eyebrow}</p>
          <h1>{copy.products.title}</h1>
          <p>{copy.products.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={copy.common.towels} title={copy.products.title} />
          <TowelGrid />
          <p className="moq-banner">{copy.products.moq}</p>
        </div>
      </section>
    </main>
  );
}
