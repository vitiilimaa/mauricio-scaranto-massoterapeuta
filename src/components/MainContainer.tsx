import "@luzDeShiva/styles/components/MainContainer.css";
import { CSSProperties, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

type MainContainerProps = {
  backgroundImage?: StaticImageData;
  children: ReactNode;
  addClass?: string;
};

const MainContainer = (props: MainContainerProps) => {
  const { children, backgroundImage, addClass = "", ...rest } = props;

  const imageStyle: CSSProperties = {
    position: "fixed",
    zIndex: -1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      {...rest}
      style={backgroundImage ? imageStyle : {}}
      className={`pages-container ${addClass}`}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="mulheres-deitadas-massagem"
            fill
            style={{ filter: "brightness(0.25)", objectFit: 'cover' }}
          />
          <div className="before-background-style" />
        </>
      )}
      {children}
    </div>
  );
};

export default MainContainer;
