'use client'
import "@luzDeShiva/styles/pages/AboutUs.css";

import MainContainer from "@luzDeShiva/components/MainContainer";
import SectionTitle from "@luzDeShiva/components/SectionTitle";
import cristianoMassoterapia from "../../../public/img/cristianoMassoterapia.jpg";
import Image from "next/image";
import DescriptiveBox from "@luzDeShiva/components/DescriptiveBox";
import medal from "../../../public/img/icons/medal.svg";
import training from "../../../public/img/icons/training.svg";
import like from "../../../public/img/icons/like.svg";
import massageTherapist from "../../../public/img/icons/massageTherapist.svg";

const AboutUs = () => {
  return (
    <MainContainer>
      <SectionTitle title="Quem somos" subtitle="BEM ESTAR EM PRIMEIRO LUGAR" />
      <div className="mt-6 flex flex-wrap justify-content-center gap-6">
        <Image
          style={{ borderRadius: 20, objectFit: "cover" }}
          className="mx-5 sm:mx-0"
          src={cristianoMassoterapia}
          alt="equipe-luz-de-shiva"
          width={500}
          height={380}
        />
        <div className="w-10 lg:w-4">
          <p style={{ fontSize: 18 }} className="mt-0">
            Bem-vindo ao Espaço Luz de Shiva, onde nossa equipe está dedicada a
            criar um ambiente que vai além de simples sessões terapêuticas.
            Destacamos o acolhimento como nosso principal foco, transformando
            cada visita em um momento singular para esquecer as preocupações
            externas e se reconectar com a própria energia e vibração. <br />
            <br />
            Ao longo da nossa jornada, exploramos profundamente as massagens e
            filosofias orientais, especialmente as tradições indianas,
            descobrindo assim a rota para uma vida mais leve e significativa, a
            verdadeira jornada em direção à essência.
          </p>
          <div className="mt-5 grid">
            <div className="col-12 py-0 sm:col-6">
              <DescriptiveBox
                addClassContainer="alignitems-center"
                titleStyle={{ lineHeight: 0.75, paddingBottom: 12 }}
                title="10+"
                subtitle="Anos de Experiência"
                icon={medal}
              />
              <DescriptiveBox
                titleStyle={{ lineHeight: 0.75, paddingBottom: 12 }}
                addClassContainer="mt-5 align-items-center"
                title="50+"
                subtitle="Treinamentos Realizados"
                icon={training}
              />
            </div>
            <div className="mt-5 py-0 col-12 sm:col-6 sm:mt-0">
              <DescriptiveBox
                titleStyle={{ lineHeight: 0.75, paddingBottom: 12 }}
                addClassContainer="align-items-center"
                title="1500+"
                subtitle="Clientes Satisfeitos"
                icon={like}
              />
              <DescriptiveBox
                titleStyle={{ lineHeight: 0.75, paddingBottom: 12 }}
                addClassContainer="mt-5 align-items-center"
                title="2"
                subtitle="Massoterapeutas"
                icon={massageTherapist}
              />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutUs;
