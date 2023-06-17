
import  React from 'react'
import  ReactDOM from 'react-dom';
import { useState } from 'react';
import { useField} from "formik";
import * as Yup from 'yup'
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent';
import { Link } from 'react-router-dom';

const MyTextInput = () =>{
    return (
        <div className='w-3/4 mx-auto h-full flex flex-col p-3 bg-gray-200 mb-3'>
        <label  className='text-lg font-sans font-bold text-gray-500'>Contact</label>
        <input className='w-full h-7 bg-teal-50 border-solid-3 border-gray-300 rounded-md' />
        </div>
    );
};
const MyPasswordInput = () =>{
    
    return (
        <div className='w-3/4 mx-auto h-full flex flex-col p-3 bg-gray-200 mt-3'>
        <label  className='text-lg font-sans font-bold text-gray-500'>Password</label>
       <div className='flex justify-end items-end'>
       <input className=' w-full h-7 bg-teal-50 border-solid-3 border-gray-300 rounded-md'></input>
       
       </div>
      

        </div>
    );
};

const MyCheckbox = () => {

    return ( 
        <div> 
             <label className='checkbox'>
            <input type='checkbox' />
                
        </label>
        
        </div>
        
    );
};

//main Component
const LoginPage = () => {  

    //defined states
    const [isShow, setisShow] = useState(false);
     const [initialValues, setinitialValues]  = useState({
       
        contact:"",
         password:'',
         
      });
const [isvisible, setisvisible] = useState("password") 

const handleHidePassword =() =>{ 
    setisvisible("text")
}
const handleShowPassword =() => {
    setisvisible("password")

}



    return( 
        <div className='flex flex-col justify-center items-center '>
         {/* <NavbarComponent/> */}
         <h1 className='font-sans font-bold  text-gray-500 text-4xl'>Sign Up</h1>
         <form className='w-1/2 h-1/4 mx-auto py-5'>
      <MyTextInput label=" Name" name="firstName" type="text" />
      <MyPasswordInput label='PassWord' name='password' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
      <button type="submit" className='w-1/4 h-10 rounded-full   mt-1 text-lg bg-green-950  text-white' >Sign up to drive</button>
    </form> 
       
        
        </div>
     
       
     );
 };


export default LoginPage














