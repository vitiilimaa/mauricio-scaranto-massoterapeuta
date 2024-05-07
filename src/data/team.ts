import mauricio from "@luzDeShiva/img/team/mauricio.jpg";
import instagram from "@luzDeShiva/img/icons/instagram.svg";
import whatsapp from "@luzDeShiva/img/icons/whatsapp.svg";

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
      url: "https://www.instagram.com/mauricio.scaranto/"
    },
    {
      img: whatsapp,
      socialMedia: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=555194799081&text=Oii!%20Quero%20uma%20massagem."
    },
  ],
}]

export default team
