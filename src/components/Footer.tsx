"use client";

import "@luzDeShiva/styles/components/Footer.css";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  return (
    <footer
      className={`${path === "/" ? "shadow-none" : "shadow-8"}`}
      style={path === "/" ? { backgroundColor: "transparent" } : {}}
    >
      <span className="text-center">
        © 2024 - Design and Code by{" "}
        <a
          href="https://www.vitorbatista.dev"
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
