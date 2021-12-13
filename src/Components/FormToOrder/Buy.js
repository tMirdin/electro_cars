import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Buy.css";
import ModalSuccess from "./ModalSuccess";
import ModalError from "./ModalError";

const Buy = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    name,
    lastName,
    addres,
    phone,
    setName,
    setLastName,
    setPhone,
    setAddres,
  } = useAuth();

  return (
    <>
      <div className="container__buyForm">
        <h3>Поля обзательные для заполнения, помечены *</h3>
        <p>
          <span>Имя*</span>
          <input
            autoFocus
            required
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          <span>Фамилия*</span>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        <p>
          <span>Адрес*</span>
          <input
            type="text"
            value={addres}
            onChange={(e) => {
              setAddres(e.target.value);
            }}
          />
        </p>
        <p>
          <span>Телефон*</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </p>
        <p>
          <span>Дополнительная информация</span>
          <input type="text" />
        </p>
        <p>
          <span>Способ оплаты</span>
          <select>
            <option>Элкарт</option>
            <option>Visa</option>
            <option>MasterCard</option>
            <option>Банковсикй счёт</option>
          </select>
        </p>
        <p>
          <span>Введите номер карты или счёта</span>
          <input type="text" />
        </p>
        <button
          onClick={(e) => {
            setOpenModal(true);
          }}
        >
          Купить
        </button>
        <div className="modalWindowBuy">
          {name === "" || lastName === "" || phone === "" || addres === ""
            ? openModal && <ModalError closeModal={setOpenModal} />
            : openModal && <ModalSuccess closeModal={setOpenModal} />}
        </div>
      </div>
    </>
  );
};

export default Buy;
