import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carsContext } from "../../../contexts/CarsContext";
import "./AddCars.css";

const AddCars = () => {
  const [cars, setCars] = useState({
    country: "",
    condition: "",
    brand: "",
    model: "",
    year: "",
    motor: "",
    drive: "",
    bodyType: "",
    battery: "",
    powerReserve: "",
    price: "",
    image: [],
    description: "",
    comments: [],
  });

  const [img, setImg] = useState("");

  const { addCars, getCars } = useContext(carsContext);

  useEffect(() => {
    getCars();
  }, []);

  function handleValues(e) {
    let newCars = {
      ...cars,
      [e.target.name]: e.target.value,
    };
    setCars(newCars);
  }

  function handleImg(e) {
    let newImg = e.target.value;
    setImg(newImg);
  }

  function handleAddImg() {
    if (img !== "") {
      cars.image.push(img);
      setImg("");
    } else {
      alert("Вы не добавили изображение!");
    }
  }

  function handleAddCars() {
    if (
      cars.country === "" ||
      cars.condition === "" ||
      cars.brand === "" ||
      cars.model === "" ||
      cars.year === "" ||
      cars.motor === "" ||
      cars.drive === "" ||
      cars.bodyType === "" ||
      cars.battery === "" ||
      cars.powerReserve === "" ||
      cars.price === "" ||
      cars.description === ""
    ) {
      alert("Вы не заполнили все поля");
    } else {
      addCars(cars);
      setCars({
        country: "",
        condition: "",
        brand: "",
        model: "",
        year: "",
        motor: "",
        drive: "",
        bodyType: "",
        battery: "",
        powerReserve: "",
        price: "",
        image: [],
        description: "",
      });
    }
  }

  return (
    <div>
      <img
        className="imgBigIcon"
        src="http://s1.iconbird.com/ico/2013/11/493/w256h2561384699841folderadd.png"
        alt="iconFavorite"
      />
      <h1 className="h1TitleFav">Добавление +</h1>
      <div className="addCars">
        <p>
          <span>Страна производитель</span>
          <input
            name="country"
            placeholder="Китай"
            type="text"
            value={cars.country}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Пробег авто</span>
          <input
            name="condition"
            placeholder="Новый, 20000"
            type="text"
            value={cars.condition}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Бренд авто</span>
          <input
            name="brand"
            placeholder="Nissan"
            type="text"
            value={cars.brand}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Модель авто</span>
          <input
            name="model"
            placeholder="Leaf"
            type="text"
            value={cars.model}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Год авто</span>
          <input
            name="year"
            placeholder="2020"
            type="text"
            value={cars.year}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Объём авто</span>
          <input
            name="motor"
            placeholder="150 квт"
            type="text"
            value={cars.motor}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Привод авто</span>
          <input
            name="drive"
            placeholder="Передний, задний, полный"
            type="text"
            value={cars.drive}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Тип кузова</span>
          <input
            name="bodyType"
            placeholder="Хетчбек, седан, универсал..."
            type="text"
            value={cars.bodyType}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Батарея</span>
          <input
            name="battery"
            placeholder="100"
            type="text"
            value={cars.battery}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Запас хода</span>
          <input
            name="powerReserve"
            placeholder="100"
            type="text"
            value={cars.powerReserve}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Цена</span>
          <input
            name="price"
            placeholder="5000"
            type="number"
            value={cars.price}
            onChange={handleValues}
          />
        </p>
        <p>
          <span>Изображение авто</span>
          <input
            name="img"
            placeholder="URL"
            type="text"
            value={img}
            onChange={handleImg}
          />
        </p>
        <p>
          {cars.image.length > 3 ? null : (
            <button onClick={handleAddImg}>Добавить фото</button>
          )}
        </p>
        <p>
          <span>Описание авто</span>
          <input
            name="description"
            placeholder="..."
            type="text"
            value={cars.description}
            onChange={handleValues}
          />
        </p>
        <p>
          <button onClick={handleAddCars}>Добавить авто +</button>
        </p>
        <p style={{ margin: "2% 4%" }}>
          <Link to="/">
            <button style={{ backgroundColor: "green" }}>На главную</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AddCars;
