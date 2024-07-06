"use client";
import "@luzDeShiva/styles/pages/Team.css";

import MainContainer from "@luzDeShiva/components/MainContainer";
import SectionTitle from "@luzDeShiva/components/SectionTitle";
import Card from "@luzDeShiva/components/Card";
import team from "@luzDeShiva/data/team";

const Team = () => {
  return (
    <MainContainer>
      <SectionTitle
        title="Maurício"
        subtitle="ESPECIALISTA EXPERIENTE"
        description="O massoterapeuta é acolhedor e transborda energia positiva para tornar sua experiência única."
        // title="Equipe"
        // subtitle="NOSSOS ESPECIALISTAS EXPERIENTES"
        // description="Nossa equipe alto astral é acolhedora e transborda energia positiva para tornar sua experiência única."
        addClassContainer="px-5"
        addClassTextDescription="text-center"
      />
      <div className="mt-6 xl:mt-8 flex flex-wrap justify-content-center gap-8 px-5">
        {team.map((person, key) => (
          <Card
            key={key}
            imgStyle={person.imgStyle}
            img={person.img}
            title={person.title}
            work={person.work}
            description={person.description}
            socialMediaIcons={person.socialMediaIcons}
          />
        ))}
      </div>
    </MainContainer>
  );
};

export default Team;
