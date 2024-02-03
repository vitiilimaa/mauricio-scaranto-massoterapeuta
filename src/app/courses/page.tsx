"use client";
import "@luzDeShiva/styles/pages/Team.css";

import MainContainer from "@luzDeShiva/components/MainContainer";
import SectionTitle from "@luzDeShiva/components/SectionTitle";
import CustomButton from "@luzDeShiva/components/CustomButton";
import Link from "next/link";

const Team = () => {
  return (
    <MainContainer>
      <SectionTitle
        title="Cursos"
        subtitle="TRANSFORME TOQUES EM BEM-ESTAR"
        description="Descubra o poder do toque terapêutico e aprofunde seus conhecimentos em massoterapia através dos nossos cursos especializados, guiados por instrutores experientes e prontos para capacitá-lo na arte de promover o equilíbrio e o bem-estar."
      />
      <div className="mt-6 flex flex-wrap justify-content-center gap-4">
        <iframe
          className="mx-7 lg:mx-0 border-none"
          width="565"
          height="300"
          src="https://www.youtube.com/embed/uqcOn-e0Fzg?si=2PVK1t03noQfMFQy&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        />
        <div className="w-10 lg:w-4">
          <h3 className="my-0" style={{ color: "var(--main-color)" }}>
            MTV - Método Tantra Vibracional: Desperte sua sensualidade e conexão
          </h3>
          <p className="mt-3" style={{ fontSize: 18 }}>
            Explore o fascinante universo da massagem tântrica e liberte sua
            sensualidade interior. Em nosso curso, você terá a oportunidade
            única de aprender as técnicas mais avançadas, refinando suas
            habilidades e aprimorando sua conexão com o corpo, a mente e as
            emoções. Além de proporcionar momentos de prazer, a massagem
            tântrica tem o poder de transformar a saúde sexual, emocional e
            psicológica.
          </p>
          <div className="flex justify-content-center lg:justify-content-start mt-5">
            <Link
              target="_blank"
              href="https://mauriciodurgante.kpages.online/pagina-de-vendas-ee68b530-d5c1-41d4-9519-d75c62fd610c"
            >
              <CustomButton title="SAIBA MAIS" addClass="px-8 py-2" />
            </Link>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Team;
