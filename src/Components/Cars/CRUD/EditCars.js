import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { carsContext } from "../../../contexts/CarsContext";

const EditCars = ({ id }) => {
  const { carsDetails, editCarsDetails, getCars } = useContext(carsContext);
  const [editCars, setEditCars] = useState(carsDetails);

  function saveEdit(id) {
    editCarsDetails(id, editCars);
    getCars();
    setEditCars({
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
      description: "",
    });
  }

  return (
    <>
      <div className="addCars">
        <p>
          <span>Страна производитель</span>
          <input
            name="country"
            placeholder="Китай"
            type="text"
            value={editCars.country}
            onChange={(e) =>
              setEditCars({ ...editCars, country: e.target.value })
            }
          />
        </p>
        <p>
          <span>Пробег авто</span>
          <input
            name="condition"
            placeholder="Новый или с пробегом"
            type="text"
            value={editCars.condition}
            onChange={(e) =>
              setEditCars({ ...editCars, condition: e.target.value })
            }
          />
        </p>
        <p>
          <span>Бренд авто</span>
          <input
            name="brand"
            placeholder="Nissan"
            type="text"
            value={editCars.brand}
            onChange={(e) =>
              setEditCars({ ...editCars, brand: e.target.value })
            }
          />
        </p>
        <p>
          <span>Модель авто</span>
          <input
            name="model"
            placeholder="Leaf"
            type="text"
            value={editCars.model}
            onChange={(e) =>
              setEditCars({ ...editCars, model: e.target.value })
            }
          />
        </p>
        <p>
          <span>Год авто</span>
          <input
            name="year"
            placeholder="2020"
            type="text"
            value={editCars.year}
            onChange={(e) => setEditCars({ ...editCars, year: e.target.value })}
          />
        </p>
        <p>
          <span>Объём авто</span>
          <input
            name="motor"
            placeholder="150 квт"
            type="text"
            value={editCars.motor}
            onChange={(e) =>
              setEditCars({ ...editCars, motor: e.target.value })
            }
          />
        </p>
        <p>
          <span>Привод авто</span>
          <input
            name="drive"
            placeholder="Передний, задний, полный"
            type="text"
            value={editCars.drive}
            onChange={(e) =>
              setEditCars({ ...editCars, drive: e.target.value })
            }
          />
        </p>
        <p>
          <span>Тип кузова</span>
          <input
            name="bodyType"
            placeholder="Хетчбек, седан, универсал..."
            type="text"
            value={editCars.bodyType}
            onChange={(e) =>
              setEditCars({ ...editCars, bodyType: e.target.value })
            }
          />
        </p>
        <p>
          <span>Батарея</span>
          <input
            name="battery"
            placeholder="100"
            type="text"
            value={editCars.battery}
            onChange={(e) =>
              setEditCars({ ...editCars, battery: e.target.value })
            }
          />
        </p>
        <p>
          <span>Запас хода</span>
          <input
            name="powerReserve"
            placeholder="100"
            type="text"
            value={editCars.powerReserve}
            onChange={(e) =>
              setEditCars({ ...editCars, powerReserve: e.target.value })
            }
          />
        </p>
        <p>
          <span>Цена</span>
          <input
            name="price"
            placeholder="5000"
            type="number"
            value={editCars.price}
            onChange={(e) =>
              setEditCars({ ...editCars, price: e.target.value })
            }
          />
        </p>
        <p>
          <span>Описание авто</span>
          <textarea
            name="description"
            placeholder="..."
            type="text"
            value={editCars.description}
            onChange={(e) =>
              setEditCars({ ...editCars, description: e.target.value })
            }
            style={{ width: "60%" }}
          ></textarea>
        </p>
        <p>
          <button onClick={() => saveEdit(id)}>Сохранить</button>
        </p>
      </div>
    </>
  );
};

export default EditCars;
