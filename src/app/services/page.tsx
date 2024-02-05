"use client";
import "@luzDeShiva/styles/pages/Services.css";
import MainContainer from "@luzDeShiva/components/MainContainer";
import SectionTitle from "@luzDeShiva/components/SectionTitle";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
import { services, ServicesProps } from "../../data/services";
import { Tooltip } from "primereact/tooltip";
import { useEffect, useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState<ServicesProps[]>([]);
  const carouselResponsiveOptions =
    typeof window !== "undefined" && window.innerWidth >= 1920
      ? 3
      : typeof window !== "undefined" && window.innerWidth >= 1024
      ? 2
      : 1;

  useEffect(() => {
    setServicesData(services);
  }, []);

  const serviceTemplate = (service: ServicesProps) => {
    return (
      <div className="relative border-round-xl mx-2 text-center overflow-hidden">
        <div className="relative" style={{ width: "100%", height: 300 }}>
          <Image
            src={service.image}
            alt="Descrição da imagem"
            style={{ objectFit: "cover" }}
            fill
          />
          <Tooltip target=".pi-stopwatch" />
          <i
            className="custom-target-icon pi pi-stopwatch absolute bottom-0 right-0 m-2 text-lg"
            data-pr-tooltip={`Tempo de sessão: ${service.duration}`}
            data-pr-position="left"
            data-pr-at="left top"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="container-card-text py-2 mt-0">
          <p className="text-white font-semibold my-1 text-xl text-overflow-ellipsis overflow-hidden white-space-none px-6">
            {service.title}
          </p>
        </div>
      </div>
    );
  };

  return (
    <MainContainer>
      <SectionTitle
        title="Serviços"
        subtitle="NOSSOS SERVIÇOS, SEU REFÚGIO DE TRANQUILIDADE"
      />
      <div className="mt-6 carousel-container">
        <Carousel
          value={servicesData}
          numVisible={carouselResponsiveOptions}
          numScroll={carouselResponsiveOptions}
          circular
          autoplayInterval={5000}
          itemTemplate={serviceTemplate}
        />
      </div>
    </MainContainer>
  );
};

export default Services;
