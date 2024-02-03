"use client";

import Image from "next/image";
import "@luzDeShiva/styles/components/Header.css";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [visibleBottom, setVisibleBottom] = useState(false);
  const path = usePathname();

  return (
    <header
      className={`flex align-items-center justify-content-between ${
        path === "/" ? "shadow-none" : "shadow-3"
      } xl:justify-content-center xl:gap-8`}
      style={path === "/" ? { backgroundColor: "transparent" } : {}}
    >
      <Sidebar
        visible={visibleBottom}
        onHide={() => setVisibleBottom(false)}
        fullScreen
        style={{ minHeight: "100vh", overflow: "hidden" }}
        content={({ closeIconRef, hide }) => (
          <div
            style={{ backgroundColor: "#7A2787" }}
            className="flex flex-column justify-content-center gap-6 gap-3 align-items-center min-h-screen overflow-y-hidden"
          >
            <Link onClick={() => setVisibleBottom(false)} href="/">
              <Image
                src={logo}
                alt={"logoLuzDeShiva"}
                width={360}
                height={170}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="flex flex-column text-center gap-5">
              <Link
                onClick={() => setVisibleBottom(false)}
                href="/"
                className="header-items font-light"
              >
                INÍCIO
              </Link>
              <Link
                onClick={() => setVisibleBottom(false)}
                href="/about-us"
                className="header-items font-light"
              >
                QUEM SOMOS
              </Link>
              <Link
                onClick={() => setVisibleBottom(false)}
                href="/team"
                className="header-items font-light"
              >
                EQUIPE
              </Link>
              <Link
                onClick={() => setVisibleBottom(false)}
                href="/services"
                className="header-items font-light"
              >
                SERVIÇOS
              </Link>
              <Link
                onClick={() => setVisibleBottom(false)}
                href="/courses"
                className="header-items font-light"
              >
                CURSOS
              </Link>
              <Link
                onClick={() => setVisibleBottom(false)}
                href="/contact"
                className="header-items font-light"
              >
                CONTATO
              </Link>
            </div>
            <div>
              <Button
                type="button"
                onClick={(e) => hide(e)}
                icon="pi pi-times"
                rounded
                outlined
                className="text-white hover:bg-white-alpha-10 active:bg-white-alpha-20 focus:shadow-none border-white"
                aria-label="Cancelar"
              />
            </div>
          </div>
        )}
      />
      <Link
        href="/"
        className="header-items hidden lg:block lg:flex-order-2 xl:flex-order-0"
      >
        INÍCIO
      </Link>
      <Link
        href="/about-us"
        className="header-items hidden lg:block lg:flex-order-3 xl:flex-order-0"
      >
        QUEM SOMOS
      </Link>
      <Link href="/team" className="header-items hidden xl:block">
        EQUIPE
      </Link>
      <Link className="lg:flex-order-1 xl:flex-order-0" href="/">
        <Image
          src={logo}
          alt={"logoLuzDeShiva"}
          style={{ objectFit: "cover" }}
          className="img-logo"
        />
      </Link>
      <Link href="/services" className="header-items hidden xl:block">
        SERVIÇOS
      </Link>
      <Link href="/courses" className="header-items hidden xl:block">
        CURSOS
      </Link>
      <Link
        href="/contact"
        className="header-items hidden lg:block lg:flex-order-4 xl:flex-order-0"
      >
        CONTATO
      </Link>
      <Button
        icon="pi pi-bars"
        className="mr-4 lg:flex-order-5 lg:mr-5 xl:flex-order-0 xl:hidden bg-transparent border-transparent"
        onClick={() => setVisibleBottom(true)}
        size="large"
      />
    </header>
  );
};

export default Header;
