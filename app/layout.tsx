import type { Metadata } from "next";
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
    <html lang="es" className="bg-black" style={{ background: "linear-gradient(338deg, rgba(20,25,24,1) 60%, rgba(132,165,157,1) 115%)" }}>
      <body className="font-urbanist tracking-wide text-white">
        {children}
      </body>
    </html>
  );
}
