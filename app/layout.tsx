import type { Metadata } from "next";
import Favicon from "./favicon.ico";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelly | Portafolio",
  description: "Portafolio de Kelly Velarde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="bg-black scroll-smooth"
      style={{
        background:
          "linear-gradient(338deg, rgba(20,25,24,1) 60%, rgba(132,165,157,1) 115%)",
      }}
    >
      <link rel="icon" href={Favicon.src} type="image/x-icon" />
      <body className="font-urbanist tracking-wide text-white">{children}</body>
    </html>
  );
}
