import { React, useState } from "react";
//import styles from "./VendorItem.module.css";
import delet from "../resource/delete.png";
import discount from "../resource/discount.png";
import edit from "../resource/edit.png";

export default function VendorItem(props) {
  const [vissibleDis, setVissibleDis] = useState(false);
  const [vissibleEdit, setVissibleEdit] = useState(false);
  const [vissibleDel, setVissibleDel] = useState(false);

  function confirmDelete() {
    setVissibleDel(false);
    props.deleteItem();
  }
  function promotion() {
    setVissibleDis(true);
    props.giveDiscount();
  }
  function updateStatus() {
    // setVissibleEdit(true);
    props.editItem();
  }

  return (
    // <div class=" bg-blue-300 flex ">
    <div class="bg-green-200 p-2 align-top max-full h-auto inline-block sm:w-1/2 md:w-1/3 xl:w-1/4">
      <div class="bg-gray-100 p-1">
        <div class="bg-red-600">{props.img}</div>
        <p class=" my-6 mx-18p text-lg">{props.name}</p>
        <div class="flex flex-row mt-0 bg-gray-400 justify-around">
          <button class="bg-red-800 p-1 m-1 rounded-lg flex flex-row" onClick={() => setVissibleDel(true)}>
            <img src={delet} alt="del" class="h-9 w-5" />
            <p class="text-gray-800 ml-1 mt-1">Delete</p>
          </button>
          <button class="bg-green-700 flex flex-row p-1  m-1 rounded-lg" onClick={() => setVissibleDis(true)}>
            <img src={discount} alt="discount" class="h-9 w-6" />
            <p class="text-gray-800 ml-1 mt-1">Discount</p>
          </button>
          <button class="bg-white flex flex-row p-1 m-1 rounded-lg" onClick={() => setVissibleEdit(true)}>
            <img src={edit} alt="edit" class="h-9 w-5" />
            <p class="text-gray-800 ml-1 mt-1">Edit</p>
          </button>
        </div>

        <div class=" bg-blue-100 top-1/3 left-1/4 rounded-2xl w-1/2 sm:left-1/3 sm:w-1/3 absolute" style={{ display: vissibleDel === false ? "none" : "block" }}>
          <div class="bg-gray-200 px-6 py-10 max-w-lg rounded-xl shadow-xl ">
            <p class=" text-lg font-bold">Delete Product</p>
            <p class="text-lg text-center">
              Are you sure of deleting this
              <br /> item? note, this process can not
              <br /> be reverted
            </p>
            <div class="h-18 flex pt-6 justify-between">
              <button class="bg-green-700 px-8  py-4 my-2 rounded-lg" onClick={() => setVissibleDel(false)}>
                <p>Cancel</p>
              </button>
              <button class="bg-red-600 px-8 py-4 my-2 rounded-lg" onClick={confirmDelete}>
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>

        <div class="bg-green-200 top-1/3 w-full p-6 h-92 sm:left-1/4 sm:w-2/4 absolute" style={{ display: vissibleDis === false ? "none" : "block" }}>
          <div class=" m-auto max-w-lg rounded-2xl bg-gray-200">
            <p class="font-bold text-xl text-center">Discount</p>
            <form onSubmit={promotion}>
              <input type="text" onChange={props.handleDiscount} value={props.discountPrice} placeholder="enter amount" class=" h-12 border-4 border-gray-300 text-gray-800 text-lg w-64 rounded-sm py-4 m-4 focus:bg-gray-100 "></input>
              <br />
              <button type="submit" class="bg-green-700 rounded-md py-3 px-6 ml-44" onClick={() => setVissibleDis(false)}>
                submit
              </button>
            </form>
          </div>
        </div>

        <div class="bg-gray-200 h-92 top-1/3 left-1/4 rounded-2xl w-1/2 sm:left-1/3 sm:w-1/3 absolute px-4 py-6" style={{ display: vissibleEdit === false ? "none" : "block" }}>
          <p class="font-semibold text-xl">Edit Status</p>
          <p>Current product status</p>
          <form onSubmit={updateStatus}>
            <input type="radio" name="statusValue" id="available" value="available" onChange={props.handleStatus} />
            <label htmlFor="available">available</label>
            <br />
            <input type="radio" name="statusValue" id="limited" value="limited" onChange={props.handleStatus} />
            <label htmlFor="limited">limited</label>
            <br />
            <input type="radio" name="statusValue" id="not available" value="not available" onChange={props.handleStatus} />
            <label htmlFor="not available">not available</label>
          </form>
          {/* <div class="h-18 flex pt-6 justify-between">
            <button class="bg-green-700 px-8  py-4 my-2 rounded-lg" onClick={() => setVissibleDel(false)}>
              <p>Cancel</p>
            </button>
            <button class="bg-red-600 px-8 py-4 my-2 rounded-lg" onClick={confirmDelete}>
              <p>Delete</p>
            </button>
          </div> */}
          <button type="submit" onClick={() => setVissibleEdit(false)} class="bg-green-600 px-8 py-3 mt-3 ml-40 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
