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
        title="Equipe"
        subtitle="NOSSOS ESPECIALISTAS EXPERIENTES"
        description="Nossa equipe alto astral é acolhedora e transborda energia positiva para tornar sua experiência única."
      />
      <div className="mt-7 flex flex-wrap justify-content-center gap-8 px-5">
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
