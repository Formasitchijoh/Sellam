import React, { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Menu from "../Menu";
import avatar from "../../resource/egusi.jpg";
const Nav_Buyer = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:flex-row lg:items-center lg:gap-6">
    
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/BuyerPage" className="flex items-center text-white">
          Buyer Page
        </Link>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/AddProductPage" className="flex items-center text-white">
          {" "}
          AddProduct
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/ItemPage" className="flex items-center text-white">
          ProductItem
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/UpdateProduct" className="flex items-center text-white">
          Update Product
        </Link>
      </Typography>
      {/* <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/BuyerProduct" className="flex items-center text-white">
          Buyer Product
        </Link>
      </Typography> */}
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/TestPage" className="flex items-center text-white">
          Test
        </Link>
      </Typography>
    </ul>
  );

  // Remember tailwind is a mobile first design paradigm hence everything you write at the beginning is oreinted towards mobile first approach

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-4 lg:px-8 lg:py-4 bg-green-950 mb-2 ">
        <div className="flex items-center justify-between text-blue-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium text-white">
            Sellam
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false}>
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => setisOpen(!isOpen)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} onClick={() => setisOpen(!isOpen)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
           
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Nav_Buyer;
