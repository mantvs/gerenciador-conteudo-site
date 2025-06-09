import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog - Este é um Blog com o Next;js",
  description: "Esta essa é a descrição dessa página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) { 
  
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Header</h1>
        </header>

        <div className="bg-red-500">{children}</div>

        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
