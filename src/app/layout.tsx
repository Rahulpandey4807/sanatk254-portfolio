import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Sanat Kumar | Mechanical Engineer & Design Engineer Portfolio";
const description = "Explore Sanat Kumar's mechanical engineering portfolio, featuring design and development experience, Cold Roll Forming, CAD modelling, engineering drawings, and mechanical design projects.";

export const metadata: Metadata = {
  metadataBase: new URL(base), title, description,
  keywords: ["design engineer", "mechanical engineer", "Sanat Kumar", "sanatk254", "Cold Roll Forming Design", "CAD Design Engineer"],
  alternates: { canonical: "/" },
  openGraph: { title, description, url: base, siteName: "Sanat Kumar", type: "website" },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f6f7f9" }, { media: "(prefers-color-scheme: dark)", color: "#14171c" }] };

const jsonLd = [
  { "@context": "https://schema.org", "@type": "Person", name: "Sanat Kumar", jobTitle: "Mechanical Engineer — Design & Development", email: "mailto:sanatk254@gmail.com", telephone: "+91 9981142454", url: base, sameAs: ["https://linkedin.com/in/s254"] },
  { "@context": "https://schema.org", "@type": "WebSite", name: "Sanat Kumar", url: base },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <head>
    <script dangerouslySetInnerHTML={{ __html: `try{if((localStorage.getItem("theme")||"dark")==="dark")document.documentElement.classList.add("dark")}catch(e){}` }} />
  </head>
      <body suppressHydrationWarning>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
        {ga && (<>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}</Script>
        </>)}
      </body>
    </html>
  );
}
