import img1Carousel from "../../public/img/carousel/img1Carousel.jpg"
import img2Carousel from "../../public/img/carousel/img2Carousel.jpg"
import img3Carousel from "../../public/img/carousel/img3Carousel.jpg"
import img4Carousel from "../../public/img/carousel/img4Carousel.jpg"
import img5Carousel from "../../public/img/carousel/img5Carousel.jpg"
import img6Carousel from "../../public/img/carousel/img6Carousel.jpg"
import img7Carousel from "../../public/img/carousel/img7Carousel.jpg"
import img8Carousel from "../../public/img/carousel/img8Carousel.jpg"
import img9Carousel from "../../public/img/carousel/img9Carousel.jpg"
import img10Carousel from "../../public/img/carousel/img10Carousel.jpg"
import { StaticImageData } from "next/image";

type ServicesProps = {
  id: number;
  title: string;
  image: StaticImageData;
  duration: string;
}

const services: ServicesProps[] = [
  {
    id: 0,
    title: "MASSAGEM RELAXANTE",
    image: img1Carousel,
    duration: '50min'
  },
  {
    id: 1,
    title: "MASSAGEM TERAPÊUTICA",
    image: img2Carousel,
    duration: '50min'
  },
  {
    id: 2,
    title: "SHIATSU",
    image: img3Carousel,
    duration: '40min'
  },
  {
    id: 3,
    title: "MASSAGEM CHINESA TUI NÁ",
    image: img4Carousel,
    duration: '50min'
  },

  {
    id: 4,
    title: "VENTOSA TERAPIA",
    image: img5Carousel,
    duration: '40min'
  },

  {
    id: 5,
    title: "MASSAGEM COM PEDRAS QUENTES",
    image: img6Carousel,
    duration: '50min'
  },
  {
    id: 6,
    title: "REIKI USSUI",
    image: img7Carousel,
    duration: '1h'
  },
  {
    id: 7,
    title: "MASSAGEM SENSITIVE",
    image: img8Carousel,
    duration: '50min'
  },
  {
    id: 8,
    title: "ESCALDA PÉS COM MASSAGEM RELAXANTE",
    image: img9Carousel,
    duration: '50min'
  },
  {
    id: 9,
    title: "MASSAGEM COM REIKI USSUI",
    image: img10Carousel,
    duration: '50min'
  },
];

export { services }
export type { ServicesProps }