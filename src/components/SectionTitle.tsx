"use client";

import "@luzDeShiva/styles/components/SectionTitle.css";
import { Rochester } from "next/font/google";
import React from "react";

const rochester = Rochester({ subsets: ["latin"], weight: "400" });

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  addClassContainer?: string;
  addClassContainerDescription?: string;
  addClassTextDescription?: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  const {
    title,
    subtitle,
    description,
    addClassContainer,
    addClassContainerDescription,
    addClassTextDescription,
    ...rest
  } = props;

  //Função para converter quebras de linha em elementos <br />
  const renderDescription = (description: string) => {
    return description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <section
      className={`container-section-title gap-4 flex flex-column justify-content-center align-items-center ${
        addClassContainer ? addClassContainer : ""
      }`}
    >
      <div className="flex align-items-center gap-2">
        <span className="title-line" />
        <h1 {...rest} className={`${rochester.className} section-title my-0`}>
          {title}
        </h1>
        <span className="title-line" />
      </div>
      {subtitle && (
        <div className="text-center">
          <h2 className="text-5xl font-bold my-0">{subtitle}</h2>
        </div>
      )}
      {description && (
        <div className={`px-5 text-center ${addClassContainerDescription}`}>
          <p className={`text-xl my-0 px-0 ${addClassTextDescription}`}>
            {renderDescription(description)}
          </p>
        </div>
      )}
    </section>
  );
};

export default SectionTitle;
