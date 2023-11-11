import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "100px",
          marginBottom: "100px",
          paddingTop: "70px",
          paddingBottom: "70px",
          fontFamily: "fuente",
          textTransform: "uppercase",
          backgroundColor: "linen",
        }}
      >
        <div style={{ borderRight: "solid 1px", paddingRight: "100px" }}>
          <LocalShippingIcon style={{ fontSize: "50px", color: "purple" }} />
          <h4>Envio gratis en San Carlos Centro</h4>
          <h5 style={{ color: "gray" }}>Con cargo en la zona</h5>
        </div>
        <div style={{ borderRight: "solid 1px", paddingRight: "100px" }}>
          <CreditCardIcon style={{ fontSize: "50px", color: "purple" }} />
          <h4>Todos los medios de pago</h4>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="3x"
            style={{ paddingBottom: "8px" }}
            color="purple"
          />
          <h4>Contactate con nosotros por Whatsapp</h4>
        </div>
      </div>
      <div className="whatsapp-container">
        <img
          className="icon-wpp"
          src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699613635/580b57fcd9996e24bc43c543_fcja2u.webp"
          alt="icono-wpp"
        />
      </div>
    </div>
  );
}
