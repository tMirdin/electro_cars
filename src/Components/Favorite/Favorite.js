import { Link } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { carsContext } from "../../contexts/CarsContext";
import "./style/Favorite.css";

const Favorite = () => {
  const { getFav, favorite, addCarToBasket } = useContext(carsContext);

  useEffect(() => {
    getFav();
  }, []);

  function deleteFavCar(id) {
    let fav = JSON.parse(localStorage.getItem("favorite"));
    let filteredFav = {
      ...fav,
      cars: fav.cars.filter((e) => e.item.id != id),
    };
    localStorage.setItem("favorite", JSON.stringify(filteredFav));
    getFav();
  }
  console.log(favorite);

  return (
    <div>
      {favorite.cars ? (
        <div className="container_favorite">
          <img
            className="imgBigIcon"
            src="https://www.svgrepo.com/show/145913/favorites-folder.svg"
            alt="iconFavorite"
          />
          <h2 className="h1TitleFav">
            Здесь будут хранится ваши избранные авто
          </h2>
          <hr />
          <div className="flexFavCard">
            {favorite.cars.map((elem) => (
              <div key={elem.item.id} className="carsFav">
                <Link to={`/cars/${elem.item.id}`}>
                  <img
                    src={elem.item.image[0]}
                    alt={elem.item.brand}
                    className="imgCarFav"
                  />
                </Link>
                {elem.item.condition === "Новый" ? (
                  <p className="pFav">
                    <img
                      src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
                      alt="icons"
                      className="iconFav"
                    />
                    {elem.item.condition}
                  </p>
                ) : (
                  <p className="pFav">
                    <img
                      src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Transport-Speedometer-icon.png"
                      alt="icons"
                      className="iconFav"
                    />{" "}
                    Пробег {elem.item.condition} км.
                  </p>
                )}
                <Link to={`/cars/${elem.item.id}`}>
                  <h2>
                    {elem.item.brand} {elem.item.model}
                  </h2>
                </Link>
                <h3>{elem.item.price}$</h3>
                <span className="spanFav">
                  <img
                    src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
                    alt="icons"
                    className="iconFav"
                  />
                  {elem.item.year}
                </span>
                <span className="spanFav">
                  <img
                    src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
                    alt="icons"
                    className="iconFav"
                  />
                  Батарея {elem.item.battery} кв/ч
                </span>
                <span className="spanFav">
                  <img
                    src="http://s1.iconbird.com/ico/2013/12/517/w256h2561386955471success2.png"
                    alt="icons"
                    className="iconFav"
                  />
                  Запас хода {elem.item.powerReserve} км
                </span>
                <div className="menuFavBasket">
                  <img
                    className="iconFavorite"
                    src="https://cdn2.iconfinder.com/data/icons/user-interface-essential-solid/32/Artboard_4-512.png"
                    alt="favoriteIcon"
                    onClick={() => deleteFavCar(elem.item.id)}
                  />
                  <img
                    className="iconBasket"
                    src="https://static.thenounproject.com/png/263811-200.png"
                    alt="basketIcon"
                    onClick={() => addCarToBasket(elem.item)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default Favorite;
