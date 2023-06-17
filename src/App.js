import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ProductItem from './Pages/ProductItem';
import ProductPage from './Pages/ProductPage';
import CardComponent from './Component/cardComponent';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import NavbarComponent from './Component/Material-Tailwind/NavbarComponent';
import AddProductPage from './Pages/AddProductPage';
import SpeedDials from './Pages/SpeedDial';

const App = () => {
  return (
  
   <BrowserRouter>
   
   <Routes>
    <Route exact path='/' Component={ProductItem}/>
   <Route path='/ProductPage' Component={ProductPage}/>
   <Route path='/CardComponent' Component={CardComponent}/>
   <Route path='/SignUpPage' Component={SignUpPage}></Route>
   <Route path='/LoginPage' Component={LoginPage}/>
   <Route path='/AddProductPage' Component={AddProductPage}/>
   </Routes>
   </BrowserRouter>

  );
};

export default App;