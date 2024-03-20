"use client";
import "@luzDeShiva/styles/components/CustomButton.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type socialMediaIcons = {
  img: StaticImageData;
  socialMedia: string;
  url: string;
};

type CardProps = {
  img: StaticImageData;
  title: string;
  work: string;
  description: string;
  socialMediaIcons?: socialMediaIcons[];
  imgStyle?: object;
};

const Card = (props: CardProps) => {
  const { img, title, work, description, socialMediaIcons, imgStyle } = props;

  return (
    <div className="flex flex-wrap justify-content-center gap-3">
      <div className="w-15rem sm:w-19rem">
        <Image
          className="w-full border-round-2xl"
          src={img}
          alt=""
          width={450}
          height={330}
          style={{ ...imgStyle, objectFit: "cover" }}
        />
      </div>
      <div className="w-15rem sm:w-19rem">
        <h1 className="my-0">{title}</h1>
        <h2 className="my-0 font-normal">{work}</h2>
        <p className="mt-3">{description}</p>
        {socialMediaIcons && (
          <div className="mt-3 flex gap-1">
            {socialMediaIcons.map((icon, index) => (
              <Link href={icon.url} target="_blank" key={index}>
                <Image
                  width={25}
                  height={25}
                  src={icon.img}
                  alt={icon.socialMedia}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
