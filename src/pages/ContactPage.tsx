"use client";

import { Link2, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { company } from "../config/company";
import { towelCategories } from "../data/towels";
import { useLanguage } from "../i18n/LanguageContext";

type FormErrors = Record<string, string>;

export function ContactPage() {
  const { language, copy } = useLanguage();
  const [searchParams] = useSearchParams();
  const [errors, setErrors] = useState<FormErrors>({});
  const [confirmation, setConfirmation] = useState(false);

  const initialType = useMemo(() => {
    const value = searchParams.get("type");
    if (value === "sample") return "Request Samples";
    return "Request a Quote";
  }, [searchParams]);

  const labels = language === "sv" ? {
    enquiryType: "Typ av förfrågan", companyName: "Företagsnamn", org: "Organisationsnummer (valfritt)", contact: "Kontaktperson",
    email: "Arbets-e-post", phone: "Telefon (valfritt)", country: "Land", product: "Produktkategori", towel: "Handdukskategori",
    quantity: "Önskad kvantitet", material: "Material", gsm: "GSM-krav", size: "Storlek", colour: "Färg",
    privateLabel: "Krav för private label", packaging: "Förpackningskrav", tests: "Krav på certifieringar eller tester",
    delivery: "Leveransort och land", date: "Önskat leveransdatum", message: "Meddelande", file: "Specifikationsfil (platshållare)",
    choose: "Välj", productValue: "Handdukar", quantityPlaceholder: "Exempel: 2 000 stycken",
  } : {
    enquiryType: "Enquiry type", companyName: "Company name", org: "Organisation number (optional)", contact: "Contact person",
    email: "Work email", phone: "Telephone (optional)", country: "Country", product: "Product category", towel: "Towel category",
    quantity: "Required quantity", material: "Material", gsm: "GSM requirement", size: "Size", colour: "Colour",
    privateLabel: "Private-label requirements", packaging: "Packaging requirements", tests: "Required certifications or tests",
    delivery: "Delivery city and country", date: "Required delivery date", message: "Message", file: "Specification file placeholder",
    choose: "Select", productValue: "Towels", quantityPlaceholder: "Example: 2,000 pieces",
  };
  const enquiryOptions = language === "sv"
    ? [
        ["Request a Quote", "Begär offert"],
        ["Request Samples", "Begär prover"],
        ["Private Label", "Private label"],
        ["General Enquiry", "Allmän förfrågan"],
      ]
    : [
        ["Request a Quote", "Request a Quote"],
        ["Request Samples", "Request Samples"],
        ["Private Label", "Private Label"],
        ["General Enquiry", "General Enquiry"],
      ];

  const requiredFields = ["companyName", "contactPerson", "email", "country", "quantity", "delivery", "message"];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: FormErrors = {};
    requiredFields.forEach((name) => {
      if (!String(formData.get(name) || "").trim()) nextErrors[name] = copy.contact.required;
    });
    const email = String(formData.get("email") || "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = copy.contact.invalidEmail;
    setErrors(nextErrors);
    setConfirmation(false);
    if (Object.keys(nextErrors).length) {
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }

    const lines = Array.from(formData.entries())
      .filter(([key]) => key !== "specificationFile")
      .map(([key, value]) => `${key}: ${String(value)}`);
    const file = formData.get("specificationFile") as File | null;
    if (file?.name) lines.push(`specificationFile: ${file.name} — attach manually`);
    const subject = `${formData.get("enquiryType")} — ${formData.get("companyName")}`;
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    // A production Formspree or custom API integration can replace this mailto flow.
    setConfirmation(true);
    window.location.href = mailto;
  }

  const input = (name: string, label: string, type = "text", optional = false, placeholder?: string) => (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} required={!optional} placeholder={placeholder} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} />
      {errors[name] && <small className="field-error" id={`${name}-error`}>{errors[name]}</small>}
    </label>
  );

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-intro-grid">
          <div>
            <p className="eyebrow">{copy.contact.eyebrow}</p>
            <h1>{copy.contact.title}</h1>
            <p>{copy.contact.intro}</p>
          </div>
          <aside>
            <h2>{copy.contact.offices}</h2>
            <p><MapPin aria-hidden="true" />{company.locations.sweden}</p>
            <p><Phone aria-hidden="true" />{company.phones.sweden}</p>
            <p><MapPin aria-hidden="true" />{company.locations.pakistan}</p>
            <p><Phone aria-hidden="true" />{company.phones.pakistan}</p>
            <a href={`mailto:${company.email}`}><Mail aria-hidden="true" />{company.email}</a>
            <a href={company.social.linkedin} rel="noreferrer"><Link2 aria-hidden="true" />LinkedIn</a>
            <small>{copy.contact.placeholders}</small>
          </aside>
        </div>
      </section>
      <section className="section contact-form-section">
        <div className="container form-shell">
          <div className="form-heading"><h2>{copy.contact.formTitle}</h2><p>{copy.contact.quoteStatement}</p></div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <label className="field">
                <span>{labels.enquiryType}</span>
                <select name="enquiryType" defaultValue={initialType}>
                  {enquiryOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              {input("companyName", labels.companyName)}
              {input("organisationNumber", labels.org, "text", true)}
              {input("contactPerson", labels.contact)}
              {input("email", labels.email, "email")}
              {input("telephone", labels.phone, "tel", true)}
              {input("country", labels.country)}
              <label className="field"><span>{labels.product}</span><select name="productCategory"><option value="Towels">{labels.productValue}</option></select></label>
              <label className="field">
                <span>{labels.towel}</span>
                <select name="towelCategory" defaultValue={searchParams.get("category") || ""}>
                  <option value="">{labels.choose}</option>
                  {towelCategories.map((category) => <option key={category.slug} value={category.slug}>{category.name[language]}</option>)}
                </select>
              </label>
              {input("quantity", labels.quantity, "text", false, labels.quantityPlaceholder)}
              {input("material", labels.material, "text", true)}
              {input("gsm", labels.gsm, "text", true)}
              {input("size", labels.size, "text", true)}
              {input("colour", labels.colour, "text", true)}
              {input("privateLabel", labels.privateLabel, "text", true)}
              {input("packaging", labels.packaging, "text", true)}
              {input("tests", labels.tests, "text", true)}
              {input("delivery", labels.delivery)}
              {input("deliveryDate", labels.date, "date", true)}
              <label className="field field--full">
                <span>{labels.message}</span>
                <textarea name="message" rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
                {errors.message && <small className="field-error" id="message-error">{errors.message}</small>}
              </label>
              <label className="field field--full">
                <span>{labels.file}</span>
                <input name="specificationFile" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg" />
                <small>{copy.contact.fileNote}</small>
              </label>
            </div>
            <button className="button" type="submit">{copy.contact.submit}</button>
            {confirmation && <p className="form-confirmation" role="status">{copy.contact.confirmation}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
