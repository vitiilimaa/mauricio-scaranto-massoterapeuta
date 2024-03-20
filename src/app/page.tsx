"use client";
import "@luzDeShiva/styles/pages/Home.css";

import MainContainer from "@luzDeShiva/components/MainContainer";
import backgroundImageHome from "../../public/img/backgroundImageHome.avif";
import CustomButton from "@luzDeShiva/components/CustomButton";
import Link from "next/link";

const Home = () => {
  return (
    <MainContainer backgroundImage={backgroundImageHome}>
      <div className="px-5 text-container text-center absolute top-0">
        <p
          style={{ overflowX: "hidden" }}
          className="w-full mb-0 text-6xl text-overflow-ellipsis lg:text-7xl font-bold"
        >
          MASSOTERAPIA COM RESULTADO
        </p>
        <p className="line-height-3 w-full mt-0 text-overflow-ellipsis text-lg lg:text-2xl font-light">
          ENCONTRE O ALIVIO DAS DORES E TENSÕES COM NOSSO ATENDIMENTO
        </p>
        <Link
          className="mt-6 w-full"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=555194799081&text=Oii!%20Quero%20uma%20massagem."
        >
          <CustomButton
            title="Quero uma massagem"
            addClass="w-full sm:w-auto shadow-2"
          />
        </Link>
      </div>
    </MainContainer>
  );
};

export default Home;
