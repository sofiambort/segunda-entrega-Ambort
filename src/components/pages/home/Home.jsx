import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { AspectRatio } from "@chakra-ui/react";

export function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div className="main">
      <div className="animacion-img">
        <img
          className="portada"
          src="https://res.cloudinary.com/duu1rotxg/image/upload/v1695585347/Imagen_de_WhatsApp_2023-09-24_a_las_15.33.06_sdsivr.jpg"
          alt=""
        />
      </div>
      <div className="carrusel">
        <Slider {...settings}>
          <div>
            <img
              className="img-carrusel"
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699274638/Imagen_de_WhatsApp_2023-11-06_a_las_09.25.23_4c2c83f2_klwhng.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="img-carrusel"
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699274718/Imagen_de_WhatsApp_2023-11-06_a_las_09.25.29_c43e3885_ikw1vr.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="img-carrusel"
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699274559/Imagen_de_WhatsApp_2023-11-06_a_las_09.25.32_8b03e463_j0atq4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="img-carrusel"
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699044180/hibisco-xl-848x477x80xX_vaszio.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="img-carrusel"
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699016678/Crisantemos1_fujbx2.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="img-carrusel"
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699016257/Anthemis1-768x512_ypz8jh.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="contenedor-datos">
        <div className="envios">
          <LocalShippingIcon className="envios-icon" />
          <h4 className="detalles-contenedor-datos">
            Envio gratis en San Carlos Centro
          </h4>
          <h5 className="zona">Con cargo en la zona</h5>
        </div>
        <div className="medios-pago">
          <CreditCardIcon className="medios-pago-icon" />
          <h4 className="detalles-contenedor-datos">
            Todos los medios de pago
          </h4>
        </div>
        <div>
          <FontAwesomeIcon
            className="contacto-icon"
            icon={faWhatsapp}
            size="3x"
            color="purple"
          />
          <h4 className="detalles-contenedor-datos">
            Contactate con nosotros por Whatsapp
          </h4>
        </div>
      </div>
      <div className="whatsapp-container">
        <img
          className="icon-wpp"
          src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699613635/580b57fcd9996e24bc43c543_fcja2u.webp"
          alt="icono-wpp"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <AspectRatio className="mapa" ratio={4 / 3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.577656002326!2d-61.1020999246549!3d-31.7274300741199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b59d76acdf4ab1%3A0xb234c4fdb16003e2!2s25%20de%20Mayo%20%26%20Scalabrini%20Ortiz%2C%20San%20Carlos%20Centro%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1700069791821!5m2!1ses-419!2sar"
            width="600"
            height="450"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
