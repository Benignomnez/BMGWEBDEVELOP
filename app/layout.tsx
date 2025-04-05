import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

export const metadata = {
  title: "BMG Web Develop | Web Design & Digital Marketing",
  description:
    "Professional web development and digital marketing services to help brands stand out online. We create stunning, responsive websites and strategic marketing plans.",
  generator: "Next.js",
  metadataBase: new URL("https://bmgwebdevelop.com"),
  keywords: [
    "web design",
    "web development",
    "digital marketing",
    "SEO",
    "responsive design",
    "website optimization",
  ],
  authors: [{ name: "BMG Web Develop" }],
  openGraph: {
    title: "BMG Web Develop | Web Design & Digital Marketing",
    description:
      "Professional web development and digital marketing services to help brands stand out online.",
    url: "https://bmgwebdevelop.com",
    siteName: "BMG Web Develop",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BMG Web Develop - Web Design & Digital Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMG Web Develop | Web Design & Digital Marketing",
    description:
      "Professional web development and digital marketing services to help brands stand out online.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BMG Web Develop",
              url: "https://bmgwebdevelop.com",
              logo: "https://bmgwebdevelop.com/bmg-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                email: "info@bmgwebdevelop.com",
                contactType: "customer service",
              },
              sameAs: ["https://instagram.com/bmgwebdevelop_rd"],
              description:
                "Professional web development and digital marketing services to help brands stand out online. We create stunning, responsive websites and strategic marketing plans.",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
