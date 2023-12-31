import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container2">
          <div>
            <h5 className="footer-effect">
              Copyright 2023 © Vivero un jardín para Artemisa
            </h5>
          </div>
          <div>
            <h5 className="footer-effect">
              Scalabrini Ortiz y 25 de Mayo - San Carlos Centro
            </h5>
          </div>
          <div className="redes">
            <BsFacebook
              style={{ width: "20px", height: "auto" }}
              className="footer-effect"
            />
            <BsInstagram
              style={{ width: "20px", height: "auto" }}
              className="footer-effect"
            />
            <FaTiktok
              style={{ width: "20px", height: "auto" }}
              className="footer-effect"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
