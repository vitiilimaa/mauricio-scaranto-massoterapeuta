"use client";

import "@luzDeShiva/styles/components/SectionTitle.css";
import { Rochester } from "next/font/google";

const rochester = Rochester({ subsets: ["latin"], weight: "400" });

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  addClassContainer?: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  const { title, subtitle, description, addClassContainer, ...rest } = props;

  return (
    <section
      className={`container-section-title gap-4 flex flex-column justify-content-center align-items-center px-5 ${
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
        <div className="md:w-11 lg:w-8 text-center ">
          <p className="text-2xl my-0">{description}</p>
        </div>
      )}
    </section>
  );
};

export default SectionTitle;
