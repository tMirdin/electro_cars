import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
import { useAuth } from "../../../contexts/AuthContext";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";

const Navbar = () => {
  /////  Auth   ////
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar_logo">
          <span className="logoLeft">
            Electro<span className="logoRight">Car</span>
          </span>
        </div>
      </Link>
      <div className="navbar_center">
        <Link to="/">
          <img
            className="iconHome"
            src="https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png"
            alt="HomeIcon"
          />
          <span>Главная</span>
        </Link>
        <Link to="/favorite">
          <img
            className="iconFavorite"
            src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-favourite-icon-png-image_855001.jpg"
            alt="favoriteIcon"
          />
          <span>Избранное</span>
        </Link>
        <Link to="/basket">
          <img
            className="iconBasket"
            src="https://pngimage.net/wp-content/uploads/2018/06/white-cart-icon-png-7.png"
            alt="basketIcon"
          />
          <span>Корзина</span>
        </Link>
        {email === "mirdin@mail.ru" ? (
          <Link to="/addCars">
            <MdAddCircleOutline className="iconAdd" />
            <span>Добавить продукт</span>
          </Link>
        ) : null}
      </div>
      <div className="navbar_right">
        {email ? (
          <h4>
            <AiOutlineUser />
            {email.match(/^([^@]*)@/)[1]}
          </h4>
        ) : null}
        {email ? (
          <Link to="/auth">
            <BiLogOut onClick={handleLogout} className="iconLogout" />
          </Link>
        ) : null}
        {email ? null : (
          <Link to="/auth">
            <BiLogIn className="iconLogin" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
