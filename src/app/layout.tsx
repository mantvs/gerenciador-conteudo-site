import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog - Este é um Blog com o Next.js",
  description: "Esta essa é a descrição dessa página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
