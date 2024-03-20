"use client";
import CustomButton from "@luzDeShiva/components/CustomButton";
import MainContainer from "@luzDeShiva/components/MainContainer";
import SectionTitle from "@luzDeShiva/components/SectionTitle";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();

  return (
    <MainContainer addClass="pb-0">
      <SectionTitle title="404" addClassContainer="absolute top-0" />
      <div className="flex flex-column text-center m-auto">
        <p className="mt-8 text-4xl sm:text-5xl">
          A PÁGINA QUE VOCÊ TENTOU ACESSAR NÃO FOI ENCONTRADA ;(
        </p>
        <div className="text-center">
          <CustomButton
            title="VOLTAR PARA O INÍCIO"
            addClass="text-xl sm:text-2xl"
            handle={() => router.push("/")}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default Error;
