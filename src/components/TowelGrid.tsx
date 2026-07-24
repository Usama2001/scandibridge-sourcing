import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { towelCategories } from "../data/towels";
import { useLanguage } from "../i18n/LanguageContext";

export function TowelGrid() {
  const { language, copy } = useLanguage();
  return (
    <div className="product-grid">
      {towelCategories.map((category) => (
        <article className="product-card" key={category.slug}>
          <Link to={`/products/towels/${category.slug}`} className="product-image-link" aria-label={`${copy.products.browse}: ${category.name[language]}`}>
            <img src={category.image} alt={category.alt[language]} loading="lazy" />
          </Link>
          <div className="product-card-body">
            <span className="card-kicker">{copy.products.categoryLabel}</span>
            <h2><Link to={`/products/towels/${category.slug}`}>{category.name[language]}</Link></h2>
            <p>{category.description[language]}</p>
            <Link className="text-link" to={`/products/towels/${category.slug}`}>
              {copy.products.browse} <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
