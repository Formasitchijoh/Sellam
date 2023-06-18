import { React, useState } from "react";
import VendorItem from "../Component/VendorItem";
import egussi from "../resource/egussi.jpg";
import plantain from "../resource/plantain.jpg";
import garri from "../resource/garri.jpg";
import NavbarComponent from "../Component/Material-Tailwind/NavbarComponent";

function UpdateProduct() {
  const [items, setItems] = useState([
    {
      img: <img src={egussi} alt="item" class="w-full h-80 " />,
      name: "egussi",
      id: 1,
      price: 1000,
      status: "available",
      isDelete: false,
      haveDiscount: false,
      needEdit: false,
    },
    {
      img: <img src={plantain} alt="item" class="w-full h-80" />,
      name: "plantain",
      id: 2,
      price: 3000,
      status: "available",
      isDelete: false,
      haveDiscount: false,
      needEdit: false,
    },
    {
      img: <img src={garri} alt="item" class="w-full h-80" />,
      name: "garri",
      id: 3,
      price: 2000,
      status: "available",
      isDelete: false,
      haveDiscount: false,
      needEdit: false,
    },
    {
      img: <img src={garri} alt="item" class="w-full h-80" />,
      name: "garri",
      id: 3,
      price: 2000,
      status: "available",
      isDelete: false,
      haveDiscount: false,
      needEdit: false,
    },
  ]);
  //const [vendorProducts,setVendorProducts] = useState(items)
  const [discountPrice, setDiscountPrice] = useState("");
  const [statusValue, setStatusValue] = useState("");

  function deleteItem(id) {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, isDelete: !item.isDelete } : item;
      });
    });
  }
  console.log("discount:", discountPrice);
  console.log("status:", statusValue);

  function handleStatus(e) {
    setStatusValue(e.target.value);
  }
  function editItem(id) {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, needEdit: !item.needEdit } : item;
      });
    });
  }

  function handleDiscount(e) {
    setDiscountPrice(e.target.value);
  }
  function giveDiscount(id) {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, haveDiscount: !item.haveDiscount, price: discountPrice } : item;
      });
    });
  }
  // const itemArr = items.map((val) => {
  //   return <VendorItem {...val} />;
  // });
  const vendorProducts = items.filter((val) => {
    return val.isDelete === false;
  });

  const itemArr = vendorProducts.map((val) => {
    return <VendorItem {...val} deleteItem={() => deleteItem(val.id)} handleDiscount={handleDiscount} handleStatus={handleStatus} editItem={() => editItem(val.id)} discountPrice={discountPrice} statusValue={statusValue} giveDiscount={() => giveDiscount(val.id)} />;
  });

  return (
    <>
      <NavbarComponent />
      <div class=" bg-green-100 h-screen w-screen pt-6">
        <p class=" text-4xl font-bold">My Products</p>
        {/* <p>{discountPrice}</p>
      <p>{statusValue}</p> */}
        <div class=" bg-white p-3 mt-6 mx-auto max-w-6xl ">{itemArr}</div>
      </div>
    </>
  );
}
export default UpdateProduct;
