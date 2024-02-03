import mauricio from "../../public/img/team/mauricio.jpg";
import cristiano from "../../public/img/team/cristiano.jpg";
import paula from "../../public/img/team/paula.jpg";
import instagram from "../../public/img/icons/instagram.svg";
import whatsapp from "../../public/img/icons/whatsapp.svg";

const team = [{
  img: mauricio,
  imgStyle: { objectPosition: "50% 26%" },
  title: "MAURÍCIO",
  work: "Massoterapeuta",
  description: "Massoterapeuta com 10 anos de experiência, especializado em massagens orientais relaxantes e terapêuticas. Formado em Shiatsu, Tui Ná Chinesa, e Ventosaterapia, entre outras técnicas.",
  socialMediaIcons: [
    {
      img: instagram,
      socialMedia: "instagram",
      url: "https://www.instagram.com/mauricio.scaranto"
    },
    {
      img: whatsapp,
      socialMedia: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=555194799081&text=Oii!%20Quero%20uma%20massagem."
    },
  ],
}, {
  img: cristiano,
  imgStyle: { objectPosition: "50% 40%" },
  title: "CRISTIANO",
  work: "Massoterapeuta",
  description: "Dedicado a massagens relaxantes, terapêuticas, e possui expertise em Massagem Tântrica e Nuru, proporcionando experiências sensoriais únicas e rejuvenescedoras.",
  socialMediaIcons: [
    {
      img: instagram,
      socialMedia: "instagram",
      url: "https://www.instagram.com/criscostaterapeuta/"
    },
    {
      img: whatsapp,
      socialMedia: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=555194799081&text=Oii!%20Quero%20uma%20massagem."
    },
  ]
}, {
  img: paula,
  imgStyle: { objectPosition: "50% 58%" },
  title: "PAULA",
  work: "Massoterapeuta",
  description: "Especializada em Massagem Tântrica e Nuru, oferecendo abordagens terapêuticas sensuais para promover bem-estar e conexão profunda com o corpo.",
  socialMediaIcons: [
    {
      img: instagram,
      socialMedia: "instagram",
      url: "https://www.instagram.com/criscostaterapeuta/"
    },
    {
      img: whatsapp,
      socialMedia: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=555194799081&text=Oii!%20Quero%20uma%20massagem."
    },
  ]
}]

export default team