"use client";
import "@luzDeShiva/styles/components/Footer.css";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

const Footer = () => {
  const path = usePathname();

  const homeStyle: CSSProperties = {
    backgroundColor: 'transparent',
    position: 'fixed',
    bottom: 0
  }

  return (
    <footer
      className={`${path === "/" ? "shadow-none" : "shadow-8"}`}
      style={path === "/" ? homeStyle : {}}
    >
      <span className="text-center">
        © 2024 - Design and Code by{" "}
        <a
          href="https://www.vitordesenvolvedor.com.br"
          target="_blank"
          className="font-bold text-white no-underline"
        >
          Vitor Batista.
        </a>
      </span>
    </footer>
  );
};

export default Footer;
