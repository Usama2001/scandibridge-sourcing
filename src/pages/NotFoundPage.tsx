import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export function NotFoundPage() {
  const { copy } = useLanguage();
  return (
    <main className="not-found">
      <div className="container">
        <span>404</span>
        <h1>{copy.notFound.title}</h1>
        <p>{copy.notFound.text}</p>
        <Link className="button" to="/"><ArrowLeft size={18} aria-hidden="true" />{copy.notFound.back}</Link>
      </div>
    </main>
  );
}
