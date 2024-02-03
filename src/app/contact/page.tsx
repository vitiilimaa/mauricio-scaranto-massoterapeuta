"use client";

import MainContainer from "@luzDeShiva/components/MainContainer";
import SectionTitle from "@luzDeShiva/components/SectionTitle";
import phone from "../../../public/img/icons/phone.svg";
import location from "../../../public/img/icons/location.svg";
import mail from "../../../public/img/icons/mail.svg";
import clock from "../../../public/img/icons/clock.svg";
import DescriptiveBox from "@luzDeShiva/components/DescriptiveBox";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { mask as masker, unMask } from "remask";
import CustomButton from "@luzDeShiva/components/CustomButton";
import CustomInputText from "@luzDeShiva/components/CustomInputText";
import { Toast } from "primereact/toast";
import submit from "@luzDeShiva/services/submit";
import { useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório."),
  email: yup
    .string()
    .matches(
      /^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/,
      "Insira um email válido"
    )
    .required("E-mail é obrigatório."),
  phone: yup
    .string()
    .matches(
      /^(?:\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4})?$/,
      "Insira um celular válido."
    )
    .required("Celular é obrigatório."),
  subject: yup.string().required("Assunto é obrigatório."),
  message: yup.string().required("Mensagem é obrigatória."),
});

const Contact = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const toast = useRef<Toast>(null);
  const [loading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    const data = getValues();

    setIsLoading(true);
    const submitData = await submit(data);
    setIsLoading(false);
    if (toast?.current) {
      toast.current.show({
        severity: submitData.status,
        summary: submitData.title,
        detail: submitData.message,
      });
    }

    if (submitData.status === "success") {
      reset();
      setValue("phone", " ");
    }
  };

  return (
    <MainContainer>
      <Toast ref={toast} position="top-right" />
      <SectionTitle title="Contato" />
      <div className="mt-6 flex flex-wrap justify-content-center column-gap-8 row-gap-6 px-5">
        <div className="w-full lg:w-4">
          <h2 style={{ color: "var(--main-color)" }} className="my-0 text-xl">
            VAMOS CONVERSAR
          </h2>
          <p className="text-5xl mt-2 mb-5">
            Daremos a melhor experiência para você
          </p>
          <div className="flex flex-column gap-3">
            <DescriptiveBox
              addClassContainerIcon="border-round-xl"
              titleStyle={{ fontSize: 20 }}
              icon={phone}
              title="Telefone"
              subtitle="(51) 9 9479-9081"
            />
            <DescriptiveBox
              addClassContainerIcon="border-round-xl"
              titleStyle={{ fontSize: 20 }}
              icon={location}
              title="Rua da República, 422 - Cidade Baixa"
              subtitle="Porto Alegre, RS - Brasil"
            />
            <DescriptiveBox
              addClassContainerIcon="border-round-xl"
              titleStyle={{ fontSize: 20 }}
              icon={mail}
              title="E-mail"
              subtitle="mauriciodurgante@gmail.com"
            />
            <DescriptiveBox
              addClassContainerIcon="border-round-xl"
              titleStyle={{ fontSize: 20 }}
              icon={clock}
              title="Horário de Funcionamento"
              subtitle={"Segunda a sexta: 9:00 - 20:00"}
              subtitle2={"Sábado: 9:00 - 18:00"}
              subtitle3={"Domingo: fechado"}
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full lg:w-4 flex-column gap-5 align-items-center justify-content-center shadow-3 border-round-2xl px-5 py-6"
        >
          <CustomInputText
            label="Nome"
            register={{ ...register("name") }}
            inputError={{
              hasError: !!errors.name?.message,
              message: errors.name?.message || "",
            }}
          />
          <CustomInputText
            label="E-mail"
            register={{ ...register("email") }}
            inputError={{
              hasError: !!errors.email?.message,
              message: errors.email?.message || "",
            }}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInputText
                label="Celular"
                onBlur={onBlur}
                value={value}
                onChange={(ev) => {
                  const originalValue = unMask(ev.target.value);
                  onChange(masker(originalValue, "(99) 99999-9999"));
                }}
                inputError={{
                  hasError: !!errors.phone?.message,
                  message: errors.phone?.message || "",
                }}
              />
            )}
          />

          <CustomInputText
            label="Assunto"
            register={{ ...register("subject") }}
            inputError={{
              hasError: !!errors.subject?.message,
              message: errors.subject?.message || "",
            }}
          />
          <CustomInputText
            type="textarea"
            label="Mensagem"
            register={{ ...register("message") }}
            inputError={{
              hasError: !!errors.message?.message,
              message: errors.message?.message || "",
            }}
          />
          <CustomButton
            title={!loading ? "ENVIAR MENSAGEM" : ""}
            addClass="w-full py-2 text-xl"
            loading={loading}
          />
        </form>
      </div>
    </MainContainer>
  );
};

export default Contact;
