import React from 'react'
import { useState } from 'react'
import garri from '../resource/garri.png'
import egusi from '../resource/egusi.jpg'
import ImageSlider from './imageSlider'
import SelectDropDown from './SelectDropDown'
const Menu = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="hamburger-menu">
        
        <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      
      {menuOpen && (
        <ul className="menu">
          <li>Home</li><hr className='menu-line'/>
          <li>Add Product</li><hr className='menu-line'/>
          <li>Update Product</li><hr className='menu-line'/>
          <li>Profile</li><hr className='menu-line'/>
          <li>LogOut</li>
        </ul>
      )}
    </div>
  );

}

const SearchInput = () =>{
    return(
        <div className='inputContainer'>
            <input className='searchInput'>Search</input>

        </div>
    )
}


const ProductPage = () => {
  return (
    <div >
        <Menu/>
        <SelectDropDown/>
        <ImageSlider/>
       
    </div>
  )
}

export default ProductPage