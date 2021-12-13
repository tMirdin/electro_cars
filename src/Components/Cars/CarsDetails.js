import { CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { carsContext } from "../../contexts/CarsContext";
import Comments from "../Comments/Comments";
import BasicRating from "../Rating/Rating";
import EditCars from "./CRUD/EditCars";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Thumbs } from "swiper";
import "./style/style.css";
import { useAuth } from "../../contexts/AuthContext";
import { GrFavorite } from "react-icons/gr";

SwiperCore.use([Thumbs]);

const CarsDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let params = useParams().id;
  console.log(useParams());
  const {
    carsDetails,
    getCarsDetails,
    deleteCars,
    addToFavorite,
    addCarToBasket,
    cars,
    getCars,
  } = useContext(carsContext);
  const {
    user: { email },
  } = useAuth();

  let recomendation = cars.filter(
    (item) => item.brand === carsDetails.brand && item.id !== carsDetails.id
  );
  useEffect(() => {
    getCarsDetails(params);
  }, []);

  const [openmodal, setOpenmodal] = useState(false);
  return (
    <>
      <div className="details">
        <div className="details__carousel">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            {carsDetails.image ? (
              carsDetails.image.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt={item.brand} className="mySwiper2_img" />
                </SwiperSlide>
              ))
            ) : (
              <CircularProgress />
            )}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            className="mySwiper"
          >
            {carsDetails.image ? (
              carsDetails.image.map((item, index) => (
                <SwiperSlide key={index} style={{ width: "88px" }}>
                  <img
                    src={item}
                    alt={carsDetails.brand}
                    className="mySwiper_img"
                  />
                </SwiperSlide>
              ))
            ) : (
              <CircularProgress />
            )}
          </Swiper>
        </div>

        <div className="details__description">
          <h1>{carsDetails.brand}</h1>
          <h2>{carsDetails.model}</h2>
          <h3>{carsDetails.price}$</h3>
          <div className="details__description_desk">
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Страна производитель: {carsDetails.country}
            </p>
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Пробег: {carsDetails.condition}
            </p>
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Год: {carsDetails.year}
            </p>
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Привод: {carsDetails.drive}
            </p>
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Кузов: {carsDetails.bodyType}
            </p>
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Электромотор: {carsDetails.motor} кВт
            </p>
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Батарея: {carsDetails.battery} кВт/ч
            </p>
            <p>
              <img
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
                alt="success"
                style={{ width: "15px" }}
              />
              Запас хода: {carsDetails.powerReserve} км
            </p>
          </div>
          <hr />
          <p className="pDescription">{carsDetails.description}</p>
          <hr />
          <GrFavorite
            onClick={() => addToFavorite(carsDetails)}
            className="iconFavorite"
          />
          <img
            className="iconBasket"
            src="https://static.thenounproject.com/png/263811-200.png"
            alt="basketIcon"
            onClick={() => addCarToBasket(carsDetails)}
          />
        </div>
      </div>
      <hr />
      <Comments id={carsDetails.id} />
      <div style={{ marginLeft: "1%" }}>
        <BasicRating />
      </div>
      {email === "mirdin@mail.ru" ? (
        <div className="blockEditDelete">
          <Link to="/">
            <button className="btnUD" onClick={() => deleteCars(params)}>
              Удалить продукт
            </button>
          </Link>
          <button className="btnUD" onClick={() => setOpenmodal(!openmodal)}>
            Редактировать
          </button>
          {openmodal && <EditCars id={carsDetails.id} />}
        </div>
      ) : null}

      {/* Рекомендации */}
      <Swiper>
        <hr />
        <h2 className="h2Recom">Похожие авто</h2>
        <div className="recom">
          {recomendation.map((item) => (
            <div className="carsCard carsRecom" key={item.id}>
              <a href={`/cars/${item.id}`}>
                <img src={item.image[0]} alt={item.brand} className="imgCar" />
              </a>

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
              <a href={`/cars/${item.id}`}>
                <h2>
                  {item.brand} {item.model}
                </h2>
              </a>

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
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default CarsDetails;
