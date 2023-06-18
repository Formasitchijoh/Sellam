import { React, useState } from "react";
import banana from "../resource/banana.jpg";
import NavbarComponent from "../Component/Material-Tailwind/NavbarComponent";
import carrage from "../resource/carrage.png";
export default function BuyerProduct() {
  const product = {
    img: <img src={banana} alt="picture" class=" h-72 w-full" />,
    pname: banana,
    price: 300,
    discountPrice: 200,
  };
  return (
    <>
      <NavbarComponent />
      <div class="bg-gray-300 m-auto w-4/5  md:w-2/3 xl:w-1/3">
        <p class=" underline">
          {" "}
          <img src={carrage} alt="picture " class=" h-10 w-10" />
          <span class=" uppercase font-bold text-lg ml-1">champions shops</span>
        </p>
        <div class="bg-white rounded-3xl px-4 w-full">{img}</div>
        <div class="flex flex-row mt-4 bg-gray-200 justify-between">
          <p class="uppercase font-semibold text-lg">{pname}</p>

          <p class=" my-6 mx-18p text-lg">

            price: <span class="font-semibold ">CFA </span>
            <span class="font-semibold text-red-700 line-through">{price}</span>
          </p>
          <p class=" my-6 mx-18p text-lg">
            <span class="font-semibold ">CFA </span>
            <span class="font-semibold text-green-700">{discountPrice} </span>
          </p>
          <button class=" bg-green-800 text-white font-semibold rounded-lg p-4 my-6">Contact Vendor</button>
          <button class=" bg-green-800 text-white font-semibold rounded-lg p-4 my-6">Other Products</button>
        </div>
      </div>
    </>
  );
}
