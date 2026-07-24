import { ArrowLeft, Check, PackageOpen, Ruler, SwatchBook, Tags, Weight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getTowelCategory } from "../data/towels";
import { useLanguage } from "../i18n/LanguageContext";
import { NotFoundPage } from "./NotFoundPage";

export function ProductCategoryPage() {
  const { slug } = useParams();
  const { language, copy } = useLanguage();
  const category = getTowelCategory(slug);
  if (!category) return <NotFoundPage />;

  const specs = [
    [SwatchBook, copy.product.materials, category.materials[language]],
    [Ruler, copy.product.sizes, category.sizes[language]],
    [Check, copy.product.colours, category.colours[language]],
    [Weight, copy.product.gsm, category.gsm[language]],
    [Tags, copy.product.privateLabel, category.privateLabel[language]],
    [PackageOpen, copy.product.packaging, category.packaging[language]],
  ] as const;

  return (
    <main>
      <section className="product-detail-hero">
        <div className="container">
          <Link className="back-link" to="/products/towels"><ArrowLeft size={17} aria-hidden="true" />{copy.common.towels}</Link>
          <div className="product-detail-grid">
            <div>
              <p className="eyebrow">{copy.products.categoryLabel}</p>
              <h1>{category.name[language]}</h1>
              <p className="product-lead">{category.description[language]}</p>
              <div className="button-row">
                <Link className="button" to={`/contact?type=quote&category=${category.slug}`}>{copy.common.requestQuote}</Link>
                <Link className="button button--outline" to={`/contact?type=sample&category=${category.slug}`}>{copy.common.requestSample}</Link>
              </div>
              <p className="moq-inline">{copy.products.moq}</p>
            </div>
            <img src={category.image} alt={category.alt[language]} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="spec-grid">
            {specs.map(([Icon, title, value]) => (
              <article key={title}><Icon aria-hidden="true" /><h2>{title}</h2><p>{value}</p></article>
            ))}
          </div>
          <p className="sourcing-note">{copy.product.sourcingNote}</p>
        </div>
      </section>
      <section className="section compact-cta">
        <div className="container">
          <div><h2>{copy.product.nextTitle}</h2><p>{copy.product.nextText}</p></div>
          <Link className="button" to={`/contact?type=quote&category=${category.slug}`}>{copy.common.requestQuote}</Link>
        </div>
      </section>
    </main>
  );
}
