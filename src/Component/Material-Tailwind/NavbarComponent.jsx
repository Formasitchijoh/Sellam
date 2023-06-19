import React, { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Menu from "../Menu";
import avatar from "../../resource/egusi.jpg";
const NavbarComponent = () => {
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
      {/* <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/" className="flex items-center text-white">
          LandingP
        </Link>
      </Typography> */}
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/ProductItem" className="flex items-center text-white">
          Home
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
            {isOpen && (
              <div>
                <ul className="bg-teal-200 absolute left-0 top-10 w-3/4 h-screen mb-10 ">
                  <div className="flex flex-col justify-center items-center mt-5">
                    <img className="w-1/4 h-1/4 rounded-full bg-white" src={avatar} alt="avatar" />
                    <p className="text-gray-900 text-xl">Abomganu Alfred</p>
                  </div>

                  {/* <Link to='/'>Home</Link>
              <Link to='ProductPage'>Shops</Link>
              <Link to='SignUpPage'>SignUp</Link>
              <Link to='LoginPage'>Login</Link>
              <Link to='AddProductPage'>AddProduct</Link>
              <Link to='LandingPage'>LandingPage</Link>
              <Link to='ItemPage'>Item</Link> */}


                  <li className="border-b-2  w-full border-gray-900">
                    <Link to="/ProductItem" className="flex items-center text-white">
                      Home
                    </Link>
                  </li>
                  <li className="border-b-2 w-full border-gray-900">
                    <Link to="/AddProductPage" className="flex items-center text-white">
                      AddProduct
                    </Link>
                  </li>
                  <li className="border-b-2 w-full border-gray-900">
                    <Link to="/ItemPage" className="flex items-center text-white">
                      ProductItem
                    </Link>
                  </li>
                  <li className="border-b-2 w-full border-gray-900">
                    <Link to="/UpdateProduct" className="flex items-center text-white">
                      Update Product
                    </Link>
                  </li>
                  {/* <li className="border-b-2 w-full border-gray-900">Login</li> */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Navbar>

      {/* <div className='mx-auto max-w-screen-md py-12'>
      <Card className='mb-12 overflow-hidden'>
        <img alt=''
        className='h-[32rem] w-full object-cover object-center'
        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
        />
      </Card>
      <Typography variant='h2' color='blue-gray' className='mb-2'> What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
        <div className='mr-4  lg:block'>
        {navList}
        <Button >
          <span>Buy now</span>
        </Button>
        </div>
       
    </div> */}
    </>
  );
};

export default NavbarComponent;
