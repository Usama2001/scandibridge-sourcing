import { Link } from "react-router-dom";
import { company } from "../config/company";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  const assetBase = import.meta.env.BASE_URL || "/";
  return (
    <Link className={`brand ${inverse ? "brand--inverse" : ""}`} to="/" aria-label={`${company.brandName} home`}>
      <img src={`${assetBase}scandibridge-logo.png`} alt={`${company.brandName} — ${company.tagline}`} />
    </Link>
  );
}
