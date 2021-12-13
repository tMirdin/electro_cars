import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCars from "./Components/Cars/CRUD/AddCars";
import Home from "./Components/Header/Home/Home";
import Navbar from "./Components/Header/Navbar/Navbar";
import CarsContextProvider from "./contexts/CarsContext";
import CarsDetails from "../src/Components/Cars/CarsDetails";
import Footer from "./Components/Header/Footer/Footer";
import Favorite from "./Components/Favorite/Favorite";
import Auth from "./Components/Auth/Firebase/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Basket from "./Components/Basket/Basket";
import BuyToCars from "./Components/FormToOrder/BuyToCars";

const MainRoutes = () => {
  return (
    <AuthContextProvider>
      <CarsContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addCars" element={<AddCars />} />
            <Route path="/cars/:id" element={<CarsDetails />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/formToOrder" element={<BuyToCars />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CarsContextProvider>
    </AuthContextProvider>
  );
};

export default MainRoutes;
