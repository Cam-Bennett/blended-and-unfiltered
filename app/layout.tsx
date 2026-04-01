import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/siteContent";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} with Carrie Bollock`,
    template: `%s — ${site.name} with Carrie Bollock`,
  },
  description: site.description,
  metadataBase: new URL("https://blendedandunfiltered.com"), // update when domain confirmed
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} with Carrie Bollock`,
    description: site.description,
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} with Carrie Bollock`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} with Carrie Bollock`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://blendedandunfiltered.com/#organization",
      name: site.name,
      url: "https://blendedandunfiltered.com",
      description: site.description,
    },
    {
      "@type": "WebSite",
      "@id": "https://blendedandunfiltered.com/#website",
      url: "https://blendedandunfiltered.com",
      name: site.name,
      publisher: { "@id": "https://blendedandunfiltered.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://blendedandunfiltered.com/episodes?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": "https://blendedandunfiltered.com/#carrie",
      name: "Carrie Bollock",
      jobTitle: "Podcast Host",
      description:
        "Mrs. Wyoming America 2025, mental health advocate, and host of Blended & Unfiltered.",
      sameAs: [],
    },
    {
      "@type": "PodcastSeries",
      "@id": "https://blendedandunfiltered.com/#podcast",
      name: site.name,
      description: site.description,
      url: "https://blendedandunfiltered.com",
      author: { "@id": "https://blendedandunfiltered.com/#carrie" },
      image: "/images/carrie-profile.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-true-black text-ivory font-lato">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
