"use client";
import CustomButton from "@luzDeShiva/components/CustomButton";
import SectionTitle from "@luzDeShiva/components/SectionTitle";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-column justify-content-center align-items-center px-5">
      <SectionTitle title="404" addClassContainer="absolute top-0" />
      <p className="text-center text-4xl sm:text-5xl">
        A PÁGINA QUE VOCÊ TENTOU ACESSAR NÃO FOI ENCONTRADA ;(
      </p>
      <CustomButton
        title="VOLTAR PARA O INÍCIO"
        addClass="text-xl sm:text-2xl"
      />
    </div>
  );
};

export default Error;
