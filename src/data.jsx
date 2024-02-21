import Logo from "../src/assets/img/header/logo.svg";
import GalleryImg1 from "../src/assets/img/gallery/1.png";
import GalleryImg2 from "../src/assets/img/gallery/2.png";
import GalleryImg3 from "../src/assets/img/gallery/3.png";
import GalleryImg4 from "../src/assets/img/gallery/4.png";
import GalleryImg5 from "../src/assets/img/gallery/5.png";
import GalleryImg6 from "../src/assets/img/gallery/6.png";
import GalleryImg7 from "../src/assets/img/gallery/7.png";
import GalleryImg8 from "../src/assets/img/gallery/8.png";
import QuoteImg from "../src/assets/img/testimonial/quote.svg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export const headerData = {
  logo: Logo,
};

export const heroData = {
  title: "Hola, Somos Ink-ON.",
  subtitle:
    "Los tatuajes tienen su propio poder para encender tus sentidos. No sólo embellecen el cuerpo sino también la psique.",
};

export const aboutData = {
  title: "Nosotros:",
  subtitle1:
    "Ink-ON es un estudio de tatuajes dedicado a transformar ideas e historias en obras de arte sobre la piel. Valoramos la originalidad y trabajamos estrechamente con nuestros clientes para crear diseños personalizados que reflejen sus personalidades y significados especiales.",
  subtitle2:
    "Además de ofrecer servicios de alta calidad, priorizamos la seguridad y la higiene, garantizando un ambiente acogedor y estéril para todos nuestros clientes.",
};

export const galleryData = {
  title: "Galería:",
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "¡Me encantó el trabajo de InkOn! Me hicieron un tatuaje increíble, exactamente como lo quería. Además, todo el equipo fue súper atento y profesional durante el proceso. ¡Lo recomiendo altamente!",
    name: "Marcos",
    occupation: "Motero",
  },
  {
    quoteImg: QuoteImg,
    message:
      "¡Encontré InkOn por recomendación de un amigo y no me arrepiento! Me hice mi primer tatuaje con ellos y quedé impresionado con la calidad del trabajo y la higiene del estudio. El tatuador tuvo mucho cuidado. ¡Definitivamente regresaré para hacerme más tatuajes!",
    name: "Ana",
    occupation: "Dentista",
  },
  {
    quoteImg: QuoteImg,
    message:
      "El tatuador que me ayudó fue extremadamente creativo y capturó exactamente la idea que tenía en mente. El ambiente del estudio es genial, me sentí muy cómoda durante toda la sesión.",
    name: "Laura",
    occupation: "Estilista",
  },
  {
    quoteImg: QuoteImg,
    message:
      "¡Soy un cliente fiel de InkOn desde hace años y no lo cambiaría por nada! Tienen una increíble variedad de estilos de tatuajes y siempre me sorprenden con el talento de los tatuadores.",
    name: "Douglas",
    occupation: "Operador de Máquinas",
  },
];

export const contactData = {
  title: "Contacto:",
  info: [
    {
      title: "Studio Sevilla",
      subtitle:
        "Nuestro estudio en Sevilla, un espacio creado para expresar tu personalidad e historia a través de tatuajes únicos y llamativos.",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "C. Puerto de la Molina, 3",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+34 163 382 000",
      },
      cel: {
        icon: <FaWhatsapp />,
        number: "+34 163 382 000",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contato@studioinkon.com.es",
      },
    },
  ],
  form: {
    name: "Nombre",
    email: "email",
    message: "mensajito",
    btnText: "Enviar",
  },
};

export const footerData = {
  about: {
    title: "Studio InkOn",
    subtitle:
      "Nuestro equipo está listo para crear tatuajes sorprendentes y significativos que vayan más allá de las expectativas.",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "C. Puerto de la Molina, 3",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+34 163 382 000",
    },
    cel: {
      icon: <FaWhatsapp />,
      number: "+34 163 382 000",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contacto@studioinkon.com.es",
    },
  },
};
