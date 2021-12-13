import React from "react";
import "./Modal.css";

function ModalSuccess({ closeModal }) {
  return (
    <div id="modalContainer">
      <div className="titleCloseBtn">
        <button onClick={() => closeModal(false)}> X </button>
      </div>
      <div className="title">
        <h2 className="h">Заказ успешно выполнен!</h2>
      </div>
      <div className="title">
        <span className="pCheck">Ваш чек:</span>
        <span className="pCheck">{Date.now()}</span>
      </div>
      <div className="body">
        <p className="pCheck">
          Ваша заявка принята. Наши операторы свяжутся с вами в ближайшие дни.
        </p>
      </div>
      <div className="clickBack">
        <button onClick={() => closeModal(false)}>Выход</button>
      </div>
    </div>
  );
}

export default ModalSuccess;
