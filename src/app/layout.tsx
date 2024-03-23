import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@luzDeShiva/components/Header";
import Footer from "@luzDeShiva/components/Footer";

import "./globals.css";
import { ModalContextProvider } from "./contexts/ModalContext";
import Modal from "@luzDeShiva/components/Modal";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maurício Scaranto - Massoterapeuta",
  description:
    "Empresa de Massoterapia Profissional no coração da Cidade Baixa em Porto Alegre, RS. Trabalhamos com agendamento prévio para Massagens Tântricas e Tradicionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={raleway.className}
        style={{ position: "relative" }}
      >
        <ModalContextProvider>
          <Header />
          {children}
          <Footer />
          <Modal />
        </ModalContextProvider>
      </body>
    </html>
  );
}
