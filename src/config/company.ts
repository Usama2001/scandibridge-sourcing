export const company = {
  legalName: "ScandiBridge Sourcing AB",
  brandName: "ScandiBridge",
  tagline: "Connecting Nordic Business to the World",
  email: "sourcing@scandibridge.example",
  phones: {
    sweden: "+46 (0) 00 000 00 00",
    pakistan: "+92 (0) 000 000 0000",
  },
  locations: {
    sweden: "Stockholm, Sweden",
    pakistan: "Lahore, Pakistan",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/scandibridge-placeholder",
  },
  canonicalUrl: "https://usama2001.github.io/scandibridge-sourcing/",
  leadership: [
    {
      name: "Usama Fiaz",
      initials: "UF",
      role: {
        sv: "Medgrundare och COO — Sverige",
        en: "Co-Founder and COO — Sweden Office",
      },
      location: "Stockholm, Sweden",
      description: {
        sv: "Usama leder relationer med nordiska köpare, affärsutveckling, inköpsstrategi och den svenska verksamheten från Stockholm.",
        en: "Usama leads Nordic buyer relationships, business development, sourcing strategy and Swedish operations from Stockholm.",
      },
    },
    {
      name: "Shariyar Zulfiqar",
      initials: "SZ",
      role: {
        sv: "Medgrundare och COO — Pakistan",
        en: "Co-Founder and COO — Pakistan Office",
      },
      location: "Lahore, Pakistan",
      description: {
        sv: "Shariyar leder leverantörsrelationer, fabrikssamordning, produktinköp, kvalitetsuppföljning och exportverksamhet från Lahore.",
        en: "Shariyar leads supplier relationships, factory coordination, product sourcing, quality follow-up and export operations from Lahore.",
      },
    },
  ],
} as const;

export type Company = typeof company;
