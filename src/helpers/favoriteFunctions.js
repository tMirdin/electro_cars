export function getCountProductsInCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.cars.length : 0;
}

export function calcSubPrice(car) {
  return (
    car.count *
    (car.item.salePrice === "" ? car.item.price : car.item.salePrice)
  );
}

export function calcTotalPrice(cars) {
  let totalPrice = 0;
  cars.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}

export function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      cars: [],
      totalPrice: 0,
    };
  }
  let newCart = cart.products.filter((elem) => elem.item.id === id);
  return newCart.length > 0 ? true : false;
}
