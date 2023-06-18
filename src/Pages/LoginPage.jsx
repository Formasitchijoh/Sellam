
import  React from 'react'
import  ReactDOM from 'react-dom';
import { useState } from 'react';
import { useField} from "formik";
import * as Yup from 'yup'
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent';
import { Link } from 'react-router-dom';
import design from '../resource/figma.png'

const MyTextInput = () =>{
    return (
        <div className='w-full mx-auto flex flex-col p-3 mb-3'>
        <label  className='text-lg  font-sans font-bold text-gray-500'>Contact</label>
        <input className='w-full h-10 lg:w-4/5 border-solid-3 focus-visible:  rounded' />
        </div>
    );
};
const MyPasswordInput = () =>{
    
    return (
        <div className='w-full mx-auto  flex flex-col p-3 mt-3'>
        <label  className='text-lg font-sans font-bold text-gray-500'>Password</label>
       {/* <div className='flex justify-end items-end'> */}
       <input className=' w-full h-10 lg:w-4/5 border-solid-3 focus-visible: border-gray-300 rounded'></input>
       
       {/* </div> */}
      

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
        <div className='max-w-screen-lg  lg:h-screen lg:w-2/5   mx-auto mt-10'>
                 <img src={design} alt='design' className='lg:w-1/2 lg:h-1/2'/>
                 <div className='absolute bottom-1/2 mb-12  right-12 ml-5 lg:relative lg:top-1  lg:left-1/2 '>
                 <h1 className='  font-sans font-bold lg:text-6xl text-gray-700  text-4xl'>Sign In</h1>
                 </div>
        <div className='  lg:px-5 h-1/2 w-full bg-teal-50 flex flex-col justify-center items-center p-2'>
        <form className= 'w-full lg:mx-auto h-full mx-auto py-5'>
      <MyTextInput label=" Name" name="firstName" type="text" />
      <MyPasswordInput label='PassWord' name='password' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
    <p className='ml-4 text-sm'>  Don't have an account</p>
      <div className='w-full gap-2 flex justify-start ml-2 items-center mt-2 '>
            <hr className='w-2/5 h-1 bg-gray-500'></hr>
            <p className='font-sans text-sm text-green-900 font-bold '>SignUp</p>
            <hr className='w-2/5 h-1 bg-gray-500'></hr>

        </div>
      <button type="submit" className='w-1/4 h-10 rounded text-2xl font-bold flex justify-center items-center mx-auto  mt-8 bg-green-950  text-white' >Login</button>
    </form> 
     
      
       
        
        </div>

        </div>
        
     
       
     );
 };


export default LoginPage














