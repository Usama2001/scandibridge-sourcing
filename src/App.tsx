"use client";

import { useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { company } from "./config/company";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductCategoryPage } from "./pages/ProductCategoryPage";
import { ProductsPage } from "./pages/ProductsPage";

function SeoAndScroll() {
  const { language, copy } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    document.title = copy.seo.title;
    const description = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (description) description.content = copy.seo.description;
    const ogTitle = document.querySelector<HTMLMetaElement>("meta[property='og:title']");
    if (ogTitle) ogTitle.content = copy.seo.title;
    const ogDescription = document.querySelector<HTMLMetaElement>("meta[property='og:description']");
    if (ogDescription) ogDescription.content = copy.seo.description;
    const canonical = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (canonical) canonical.href = new URL(location.pathname.replace(/^\/scandibridge-sourcing/, ""), company.canonicalUrl).href;
  }, [copy, language, location.pathname]);
  return null;
}

function AppFrame() {
  const { copy } = useLanguage();
  return (
    <>
      <SeoAndScroll />
      <a className="skip-link" href="#main-content">{copy.common.skip}</a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/towels" element={<ProductsPage />} />
          <Route path="/products/towels/:slug" element={<ProductCategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export function SiteApp() {
  const basename = useMemo(() => {
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/scandibridge-sourcing")) {
      return "/scandibridge-sourcing";
    }
    return "/";
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter basename={basename}>
        <AppFrame />
      </BrowserRouter>
    </LanguageProvider>
  );
}
