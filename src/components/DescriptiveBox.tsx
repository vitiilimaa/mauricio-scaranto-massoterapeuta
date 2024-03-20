"use client";
import "@luzDeShiva/styles/components/DescriptiveBox.css";
import Image from "next/image";

type DescritiveBoxProps = {
  title: string;
  subtitle: string;
  subtitle2?: string;
  subtitle3?: string;
  icon: string;
  handle?: () => void;
  addClassContainer?: string;
  addClassContainerIcon?: string;
  titleStyle?: object;
};

const DescriptiveBox = (props: DescritiveBoxProps) => {
  const {
    title,
    subtitle,
    subtitle2,
    subtitle3,
    icon,
    handle,
    addClassContainer = "",
    addClassContainerIcon = "",
    titleStyle,
    ...rest
  } = props;

  return (
    <div {...rest} className={`flex gap-2 ${addClassContainer || ""}`}>
      <div
        className={`descriptive-box flex justify-content-center align-items-center ${
          addClassContainerIcon || ""
        }`}
        onClick={handle}
      >
        <Image
          src={icon}
          alt={`${title.toLowerCase().replace(" ", "")}-icon`}
          width={32}
          height={32}
        />
      </div>
      <div>
        <h1 style={titleStyle} className="my-0">
          {title}
        </h1>
        <p className="subtitle-descriptive-box my-0">{subtitle}</p>
        {subtitle2 && (
          <p className="subtitle-descriptive-box my-0">{subtitle2}</p>
        )}
        {subtitle3 && (
          <p className="subtitle-descriptive-box my-0">{subtitle3}</p>
        )}
      </div>
    </div>
  );
};

export default DescriptiveBox;
