import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import "./style/style.css";

const CarsCard = ({ item }) => {
  return (
    <div className="carsCard">
      <Carousel interval={5000}>
        {item.image ? (
          item.image.map((elem, i) => (
            <Link to={`/cars/${item.id}`}>
              <img src={elem} alt={elem.brand} key={i} className="imgCar" />
            </Link>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </Carousel>

      {/* Условие на наличие пробега */}
      {item.condition === "Новый" ? (
        <p className="pCard">
          <img
            src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
            alt="icons"
            className="iconCard"
          />
          {item.condition}
        </p>
      ) : (
        <p className="pCard">
          <img
            src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Transport-Speedometer-icon.png"
            alt="icons"
            className="iconCard"
          />{" "}
          Пробег {item.condition} км.
        </p>
      )}

      {/* Название авто */}
      <Link to={`/cars/${item.id}`}>
        <h2>
          {item.brand} {item.model}
        </h2>
      </Link>

      {/* Цена */}
      <h3>{item.price}$</h3>

      {/* Нижнее описание */}
      <span className="spanCard">
        <img
          src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
          alt="icons"
          className="iconCard"
        />
        {item.year}
      </span>
      <span className="spanCard">
        <img
          src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
          alt="icons"
          className="iconCard"
        />
        Батарея {item.battery} кв/ч
      </span>
      <span className="spanCard">
        <img
          src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
          alt="icons"
          className="iconCard"
        />
        Запас хода {item.powerReserve} км
      </span>
    </div>
  );
};

export default CarsCard;
