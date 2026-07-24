import type { Metadata } from "next";
import "./globals.css";

const canonical = "https://usama2001.github.io/scandibridge-sourcing/";

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title: "ScandiBridge Sourcing AB | B2B-inköp och private label i Norden",
  description: "ScandiBridge hjälper svenska och nordiska företag med B2B-inköp, handdukar, private label, prover och leverantörssamordning.",
  alternates: { canonical },
  icons: {
    icon: "/scandibridge-logo.png",
    shortcut: "/scandibridge-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    alternateLocale: ["en_GB"],
    title: "ScandiBridge Sourcing AB | B2B-inköp och private label i Norden",
    description: "B2B-inköp, private label och leverantörssamordning för nordiska företag.",
    url: canonical,
    siteName: "ScandiBridge",
    images: [{ url: `${canonical}og.png`, width: 1728, height: 909, alt: "ScandiBridge — Private-label sourcing for Nordic businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScandiBridge Sourcing AB",
    description: "Connecting Nordic Business to the World",
    images: [`${canonical}og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ScandiBridge Sourcing AB",
          alternateName: "ScandiBridge",
          url: canonical,
          logo: `${canonical}scandibridge-logo.png`,
          description: "B2B sourcing, wholesale, private label and supplier coordination for Nordic businesses.",
          location: [
            { "@type": "Place", name: "Stockholm, Sweden" },
            { "@type": "Place", name: "Lahore, Pakistan" },
          ],
        }) }} />
      </body>
    </html>
  );
}
