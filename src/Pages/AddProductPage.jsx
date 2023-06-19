import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AllProductArray from '../Data/AllProduct';
import CardComponent from '../Component/cardComponent';
import garri from '../resource/garri.png';
import ProductPage from '../Pages/ProductPage'


function Fab() {
  return (
    <button className=" float-right h-10 justify-center items-center top-1/5 right-10 xl:mr-20 rounded-full bg-green-900 text-white p-4 shadow-lg hover:shadow-xl">
      <FontAwesomeIcon className='mb-6 ' icon={faPlus} />
    </button>
  );
}

const AddProductPage = () => {
  const [newProduct, setnewProduct] = useState({
    category: '',
    name: '',
    price: '',
  });

  const [selectedOption, setselectedOption] = useState(null);
  const [selectedProduct, setselectedProduct] = useState(null);
  const [price, setPrice] = useState(0);
  const [newProducts, setNewProducts] = useState([]);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = () => {
    // Do something with the selected image, e.g., upload it to a server
    return(
      <img src={image} alt=''/>
    )
  };
  useEffect(() => {
    const savedValues = localStorage.getItem('newProducts');
    if (savedValues) {
      setNewProducts(JSON.parse(savedValues));
    }
  }, []);

  const handleSubmits = (event) => {
    event.preventDefault();
    const newValue = {
      category: selectedOption.value,
      name: selectedProduct.name,
      price: price,
      image:URL.createObjectURL(image)

    };
    setNewProducts([...newProducts, newValue]);
  };

  useEffect(() => {
    localStorage.setItem('newProducts', JSON.stringify(newProducts));
  }, [newProducts]);

  const handleSelect = (selectedOption) => {
    setselectedOption(selectedOption);
    setselectedProduct(null);
  };

  const handleSelectProduct = (e) => {
    setselectedProduct(e);
  };

  const products = selectedOption
    ? AllProductArray.find((item) => item.Category === selectedOption.value)
        .products
    : [];

  const productsCards = newProducts.map((product, index) => (
    <CardComponent
      key={index}
      name={product.name}
      price={product.price}
      image={product.image}
      text='Everything you need'
    />
  ));

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmits}>
        <NavbarComponent />

        <div className='max-w-screen-xl bg-teal-50 px-3 xl:w-2/5  h-100 mx-auto flex flex-col justify-center items-center  mb-10 gap-3'>
          <div className='w-full '>
            <h1 className='text-3xl text-gray-700 font-sans font-bold ml-20 '>
              Add Products
            </h1>
            <Fab />
          </div>
          <div className='w-full xl:w-full mt-5 '>
            <label className='text-lg text-gray-700 font-bold font-sans ml-3'>
              Category
            </label>
            <Select
              placeholder='Category'
              value={selectedOption}
              options={AllProductArray.map((item) => ({
                value: item.Category,
                label: item.Category,
              }))}
              onChange={handleSelect}
              className='w-11/12  ml-3  h-5 mb-5 xl:w-3/4'
            />
          </div>
          <div className='w-full xl:w-full mt-5 '>
            <label className='text-lg text-gray-700 font-bold font-sans ml-3'>
              Product Name
            </label>
            <Select
              placeholder='Product Name'
              value={selectedProduct}
              options={products}
              onChange={handleSelectProduct}
              getOptionLabel={e => (
                <div>
                    <span style={{marginLeft:5}}>{e.name}</span>
                </div>
              )} 
              className='w-11/12  ml-3  h-5 mb-5 xl:w-3/4'
            />
          </div>
          <div className='w-full mx-auto flex flex-col p-3 mb-3'>
            <label className='text-lg  font-sans font-bold text-gray-900'>
              Price
            </label>
            <input
              className='w-full xl:w-4/5 h-10 lg:w-4/5 border-solid-3 focus-visible:  rounded'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="w-1/2 mx-auto mt-8">
      <div className="flex items-center justify-center w-full h-48 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Selected Image" className="h-full rounded-lg" />
        ) : (
          <span className="text-gray-500">Select an image</span>
        )}
      </div>
      <div className="mt-4">
        <input type="file" onChange={handleImageChange} accept="image/*" className="hidden" id="image-upload" />
        <label htmlFor="image-upload" className="w-full px-4 py-2 text-sm text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-600 transition duration-200 ease-in-out">
          Select Image
        </label>
      </div>
      {/* {image && (
        <button type="button" onClick={handleImageUpload} className="mt-4 w-full px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out">
          Upload Image
        </button>
      )} */}
    </div>
          {/* <div className='w-full h-full ml-5 mt-5 '>
            <label className='text-lg text-gray-700  font-bold font-sans ml-3'>
              Select Image
            </label>

            <div className='w-full h-full  flex justify-center items-center p-2 pl-10  '>
              <div className='bg-gray-300  relative p-5   opacity-70'>
                <img src={garri} alt='' />
              </div>
              <div className='w-full h-10'>
                <div className=' xl:ml-14  xl:z-3 absolute left-1/4 xl:left-1/3 opacity-60 p-3 rounded text-xl font-sans font-bold  mt-1  bg-green-950  text-white'>
                  Upload Image
                </div>
              </div>
            </div>
          </div> */}

          <button
            type='submit'
            onClick={handleImageUpload}
            className=' w-1/4  h-10 mx-auto rounded mb-5 mt-5 mr-10 text-xl bg-green-950  text-white'
          >
            Submit
          </button>
        </div>
      </form>

      <div className='  max-w-screen-xl bg-teal-50 px-3 xl:w-1/2  xl:h-1/2 mx-auto flex flex-col justify-center items-center  mb-10 gap-3'>
        <h1 className='text-3xl text-green-900 '>My Products</h1>
        <ProductPage ItemCards={productsCards} />
        {/* <img src={image} alt=''/> */}
      </div>
    </div>
  );
};

export default AddProductPage;