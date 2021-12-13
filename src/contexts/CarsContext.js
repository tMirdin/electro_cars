import React, { createContext, useReducer } from "react";
import axios from "axios";
import {
  getCountCarsInBasket,
  calcSubPrice,
  calcTotalPrice,
} from "../helpers/basketFunctions";

export const carsContext = createContext();

const INIT_STATE = {
  cars: [],
  carsDetails: {},
  favorite: {},
  basketLength: getCountCarsInBasket(),
  basket: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CARS":
      return { ...state, cars: action.payload };
    case "GET_CARS_DETAILS":
      return { ...state, carsDetails: action.payload };
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...state, basketLength: action.payload };
    case "GET_BASKET":
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};

const CarsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCars = async (params) => {
    const { data } = await axios(`http://localhost:8000/cars?${params}`);
    dispatch({
      type: "GET_CARS",
      payload: data,
    });
  };

  async function addCars(cars) {
    await axios.post("http://localhost:8000/cars", cars);
    getCars();
  }
  async function addComments(id, comments) {
    await axios.patch(`http://localhost:8000/cars/${id}`, comments);
    getCars();
  }

  const getCarsDetails = async (id) => {
    const { data } = await axios(`http://localhost:8000/cars/${id}`);
    dispatch({
      type: "GET_CARS_DETAILS",
      payload: data,
    });
  };

  async function deleteCars(id) {
    await axios.delete(`http://localhost:8000/cars/${id}`);
    getCars();
  }

  async function editCarsDetails(id, editedCars) {
    await axios.patch(`http://localhost:8000/cars/${id}`, editedCars);
    getCars();
  }

  function addToFavorite(car) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        cars: [],
      };
    }
    let newCar = {
      item: car,
    };

    let filteredFavorite = favorite.cars.filter(
      (elem) => elem.item.id === car.id
    );
    if (filteredFavorite.length > 0) {
      favorite.cars = favorite.cars.filter((elem) => elem.item.id !== car.id);
    } else {
      favorite.cars.push(newCar);
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }

  function getFav() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        cars: [],
      };
    }
    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  }

  function addCarToBasket(car) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        cars: [],
        totalPrice: 0,
      };
    }
    let newCar = {
      item: car,
      count: 1,
      subPrice: 0,
    };

    let filteredBasket = basket.cars.filter((elem) => elem.item.id === car.id);
    if (filteredBasket.length > 0) {
      basket.cars = basket.cars.filter((elem) => elem.item.id !== car.id);
    } else {
      basket.cars.push(newCar);
    }
    newCar.subPrice = calcSubPrice(newCar);
    basket.totalPrice = calcTotalPrice(basket.cars);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.cars.length,
    });
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        cars: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  function changeCarCount(count, id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.cars = basket.cars.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    basket.totalPrice = calcTotalPrice(basket.cars);
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  return (
    <carsContext.Provider
      value={{
        cars: state.cars,
        getCars,
        addCars,
        carsDetails: state.carsDetails,
        getCarsDetails,
        deleteCars,
        editCarsDetails,
        addComments,
        favorite: state.favorite,
        getFav,
        addToFavorite,
        basketLength: state.basketLength,
        basket: state.basket,
        addCarToBasket,
        getBasket,
        changeCarCount,
        dispatch,
      }}
    >
      {children}
    </carsContext.Provider>
  );
};

export default CarsContextProvider;
