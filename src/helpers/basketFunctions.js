export function getCountCarsInBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));

  return basket ? basket.cars.length : 0;
}

export function calcSubPrice(car) {
  return car.count * car.item.price;
}

export function calcTotalPrice(cars) {
  let totalPrice = 0;
  cars.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}

export function checkCarInBasket(id) {
  let basket = JSON.parse(localStorage.getItem("basket"));
  if (!basket) {
    basket = {
      cars: [],
      totalPrice: 0,
    };
  }
  let newBasket = basket.cars.filter((elem) => elem.item.id === id);
  return newBasket.length > 0 ? true : false;
}
