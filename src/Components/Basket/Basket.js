import React, { useContext, useEffect } from "react";
import { carsContext } from "../../contexts/CarsContext";
import CircularProgress from "@mui/material/CircularProgress";
import { calcTotalPrice } from "../../helpers/basketFunctions";
import "./style/Basket.css";
import Buy from "../FormToOrder/Buy";

const Basket = () => {
  const { getBasket, basket, changeCarCount, dispatch } =
    useContext(carsContext);

  useEffect(() => {
    getBasket();
  }, []);

  function deleteBasketCar(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let filteredBasket = {
      ...basket,
      cars: basket.cars.filter((e) => e.item.id != id),
    };
    localStorage.setItem("basket", JSON.stringify(filteredBasket));
    calcTotalPrice(basket.cars);
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: filteredBasket.cars.length,
    });
    getBasket();
  }

  return (
    <div>
      <img
        className="imgBigIcon"
        src="https://www.freeiconspng.com/thumbs/shopping-basket-icon/grocery-basket-icon-8.png"
        alt="iconFavorite"
      />
      <h1 className="h1TitleFav">Корзина</h1>
      <hr />
      <div className="basketAndOrder">
        <div className="basket">
          {basket.cars ? (
            <div>
              {basket.cars.map((elem) => (
                <div key={elem.item.id} className="basketCard">
                  <div className="leftBasket">
                    <img src={elem.item.image[0]} alt="product img" />
                    <p>
                      <span>{elem.item.brand}</span>
                      <span>{elem.item.model}</span>
                    </p>
                  </div>
                  <div className="rightBasket">
                    <span>{elem.item.price}$</span>
                    <input
                      value={elem.count}
                      type="number"
                      min="1"
                      onChange={(e) =>
                        changeCarCount(e.target.value, elem.item.id)
                      }
                    />
                    <img
                      src="https://image.flaticon.com/icons/png/512/166/166503.png"
                      alt="BasketDelete"
                      onClick={() => deleteBasketCar(elem.item.id, elem.item)}
                    />
                  </div>
                </div>
              ))}

              <h4>Сумма: {calcTotalPrice(basket.cars)} $</h4>
            </div>
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="orderForm">
          <Buy />
        </div>
      </div>
    </div>
  );
};

export default Basket;
