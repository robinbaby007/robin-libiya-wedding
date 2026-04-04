import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robin Baby & Libiya Joseph | Married January 2026",
  description:
    "Robin Baby and Libiya Joseph celebrated their wedding on January 1, 2026. Relive the magical moments of our special day.",
  keywords: [
    "wedding",
    "Robin Baby",
    "Libiya Joseph",
    "January 2026",
    "married",
  ],
  openGraph: {
    title: "Robin Baby & Libiya Joseph - Our Wedding Story",
    description:
      "Two hearts became one on January 1, 2026. Relive the magical moments of our special day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
