import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsTelegram,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { ImGooglePlus3 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blockTop">
        <div className="blockTop_right">
          <label>Отзывы</label>
          <label>О сайте</label>
          <label>Контакты</label>
        </div>
        <div className="blockTop_left">
          <p className="iconFooter">
            <BsFacebook style={{ width: "100%", height: "100%" }} />
          </p>
          <p className="iconFooter">
            <ImGooglePlus3 style={{ width: "100%", height: "100%" }} />
          </p>
          <p className="iconFooter">
            <BsTelegram style={{ width: "100%", height: "100%" }} />
          </p>
          <p className="iconFooter">
            <BsInstagram style={{ width: "100%", height: "100%" }} />
          </p>
          <p className="iconFooter">
            <BsWhatsapp style={{ width: "100%", height: "100%" }} />
          </p>
        </div>
      </div>
      <div className="blockBottom">
        <label>2021 г. Электрические автомобили на ElectroCar.kg</label>
      </div>
    </div>
  );
};

export default Footer;
