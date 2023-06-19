import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductItem from "./Pages/ProductItem";
import ProductPage from "./Pages/ProductPage";
import CardComponent from "./Component/cardComponent";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import NavbarComponent from "./Component/Material-Tailwind/NavbarComponent";
import AddProductPage from "./Pages/AddProductPage";
import SpeedDials from "./Pages/SpeedDial";
import ItemPage from "./Pages/ItemPage";
import LandingPage from "./Pages/LandingPage";
import UpdateProduct from "./Pages/UpdateProduct";
import TestPage from "./Pages/TestPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" Component={LandingPage} />
        <Route path="/ProductPage" Component={ProductPage} />
        <Route path="/CardComponent" Component={CardComponent} />
        <Route path="/SignUpPage" Component={SignUpPage}></Route>
        <Route path="/LoginPage" Component={LoginPage} />
        <Route path="/AddProductPage" Component={AddProductPage} />
        <Route path="/ItemPage" Component={ItemPage} />
        <Route path="/ProductItem" Component={ProductItem} />
        <Route path="/UpdateProduct" Component={UpdateProduct} />
        <Route path="/TestPage" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
