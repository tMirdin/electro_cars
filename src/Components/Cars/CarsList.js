import React, { useContext, useEffect, useState } from "react";
import { carsContext } from "../../contexts/CarsContext";
import CarsCard from "./CarsCard";
import "./style/style.css";
import ReactPaginate from "react-paginate";

const CarsList = () => {
  const { cars, getCars } = useContext(carsContext);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getCars();
  }, []);

  const carsPerPage = 6;
  const pagesVisited = pageNumber * carsPerPage;

  const pageCount = Math.ceil(cars.length / carsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayCars = cars
    .slice(pagesVisited, pagesVisited + carsPerPage)
    .map((item) => <CarsCard item={item} key={item.id} />);
  return (
    <div className="carsList">
      {displayCars}
      <ReactPaginate
        previousLabel={"Назад"}
        nextLabel={"Вперед"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default CarsList;
