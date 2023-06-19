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
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={ProductPage} />
        <Route exact path="/ProductItem" Component={ProductItem} />
        <Route path="/CardComponent" Component={CardComponent} />
        <Route path="/SignUpPage" Component={SignUpPage}></Route>
        <Route path="/LoginPage" Component={LoginPage} />
        <Route path="/AddProductPage" Component={AddProductPage} />
        <Route path="/ItemPage" Component={ItemPage} />
        <Route path="/LandingPage" Component={LandingPage} />
        <Route path="/UpdateProduct" Component={UpdateProduct} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
