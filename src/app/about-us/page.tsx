"use client";
import "@luzDeShiva/styles/pages/AboutUs.css";

import MainContainer from "@luzDeShiva/components/MainContainer";
import SectionTitle from "@luzDeShiva/components/SectionTitle";
import { Card } from "primereact/card";
import mauricioScarantoAboutMe from "@luzDeShiva/img/mauricioScarantoAboutMe.jpg";
import Image from "next/image";
import DescriptiveBox from "@luzDeShiva/components/DescriptiveBox";
import medal from "@luzDeShiva/img/icons/medal.svg";
import training from "@luzDeShiva/img/icons/training.svg";
import like from "@luzDeShiva/img/icons/like.svg";
import massageTherapist from "@luzDeShiva/img/icons/massageTherapist.svg";
import team from "@luzDeShiva/data/team";

const AboutUs = () => {
  return (
    <MainContainer addClass="pb-5 xl:pb-7">
      <SectionTitle
        title="Quem somos"
        subtitle="BEM ESTAR EM PRIMEIRO LUGAR"
        addClassContainer="px-5"
      />
      <div className="mt-6 flex flex-wrap justify-content-center gap-6">
        <Image
          style={{ borderRadius: 20, objectFit: "cover" }}
          className="mx-5 sm:mx-0"
          src={mauricioScarantoAboutMe}
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
                title={team.length.toString()}
                subtitle="Massoterapeutas"
                icon={massageTherapist}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid w-full justify-content-center">
        <div className="col-10 xl:col-3">
          <Card className="h-full">
            <SectionTitle
              title="Missão"
              description="Foco em melhorar a saúde, de prevenir desequilíbrios corporais, trabalhando tanto os aspectos físicos como os mentais.
Melhorar a qualidade de vida de todos pacientes."
              addClassContainer="mt-0"
              addClassTextDescription="text-justify"
            />
          </Card>
        </div>

        <div className="col-10 xl:col-3">
          <Card className="h-full">
            <SectionTitle
              title="Visão"
              description="Ser referência no segmento de Massoterapias com reconhecimento da sociedade na oferta de serviços de massagem e Terapias Holísticas com profissionais qualificados e diferenciados."
              addClassContainer="mt-0"
              addClassTextDescription="text-justify"
            />
          </Card>
        </div>

        <div className="col-10 xl:col-3">
          <Card className="h-full">
            <SectionTitle
              title="Valores"
              description={`- Atuar com ética e responsabilidade com todos os nossos parceiros, colaboradores, clientes e com a comunidade;\n
- Contribuir com a melhoria da qualidade de vida do ser humano;\n
- Oferecer serviços adequados à necessidade de cada cliente, demonstrando conhecimento e atuando com profissionalismo.
`}
              addClassContainer="mt-0"
              addClassTextDescription="text-justify"
            />
          </Card>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutUs;
