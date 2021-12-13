import React from "react";
import "./Modal.css";

function ModalError({ closeModal }) {
  return (
    <div id="modalContainer">
      <div className="titleCloseBtn">
        <button onClick={() => closeModal(false)}> X </button>
      </div>
      <div className="title">
        <h2 className="h">Вы не заполнили все поля!</h2>
      </div>
      <div className="title">
        <img src="https://icon-library.com/images/error-image-icon/error-image-icon-23.jpg" />
      </div>
      <div className="red">
        <p>Для совершения покупки машины, заполните все поля!</p>
      </div>
      <div className="clickBack">
        <button onClick={() => closeModal(false)} id="canselBtn">
          Назад
        </button>
      </div>
    </div>
  );
}

export default ModalError;
