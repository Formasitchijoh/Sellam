
import  React from 'react'
import  ReactDOM from 'react-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage,useField, useFormik} from "formik";
import * as Yup from 'yup'
import  eye from '../resource/eye.png'
import hideeye from '../resource/eye-1.png'
import cap from '../resource/banana.jpg'
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent';

import { Link } from 'react-router-dom';

const MyTextInput = ({label, setradioInput,  ...props}) =>{
    const [field, meta] = useField(props);
    return (
        <div className='w-fullmx-auto h-full flex flex-col p-3  mb-3'>
        <label htmlFor={props.id || props.name} className='text-lg font-sans font-bold text-gray-500'>{label}</label>
        <input className='w-full h-10 lg:w-4/5 border-solid-3 focus-visible:  rounded' {...field} {...props}/>
        {meta.touched && meta.error ?
         (<div className='text-red-500 text-sm '>{meta.error}</div>):null}

        </div>
    );
};
const MyPasswordInput = ({label, isvisible, handleHidePassword,handleShowPassword, ...props}) =>{
    
    const [field, meta] = useField(props);
    return (
        <div className='w-full mx-auto h-full flex flex-col p-3  mt-3'>
        <label htmlFor={props.id || props.name} className='text-lg font-sans font-bold text-gray-500'>{label}</label>
       {/* <div className='flex justify-end items-end'> */}
       <input  {...field} {...props}  className=' w-full h-10 lg:w-4/5 border-solid-3 focus-visible: border-gray-300 rounded'></input>
       {/* {isvisible ==="password"?( <img  src={hideeye}  onClick={handleHidePassword} className=' absolute w-4 h-6 mb-0.5 rounded-sm bg-green-100 left-20
        ' alt=""/>): (
                <img src={eye} alt=""  className=' absolute  w-4 h-6 mb-0.5 rounded-sm bg-green-50' onClick={handleShowPassword}/>
        )} */}
       {/* </div> */}
        
        {meta.touched && meta.error ?
         (<div className='error'>{meta.error}</div>):null}

        </div>
    );
};

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type:'checkbox'});

    return ( 
        <div> 
             <label className='checkbox'>
            <input type='checkbox' {...field} {...props}/>
                {children}
        </label>
        {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
        ) : null}
        </div>
        
    );
};



const Welcome = () =>{
    return (
        
        <div className='flex  w-full h-50 mb-10 justify-around items-end bg-purple-800 font-sans text-4 font-bold'>
                    <h1 className='justify-selft'>Welcome  to<br/>  Agri-Tec</h1>
        <a className='text-white justify-end'  href='#'> Sign Up to Agri-Tec</a>
        </div>

       
    )
} 


//main Component
const SignUpPage = () => {  

    //defined states
    const [isShow, setisShow] = useState(false);
     const [initialValues, setinitialValues]  = useState({
        name:"",
        contact:"",
        email:"" ,
         password:'',
         confirmpassword:'', 
      });
const [isvisible, setisvisible] = useState("password") 

const handleHidePassword =() =>{ 
    setisvisible("text")
}
const handleShowPassword =() => {
    setisvisible("password")

}

      //Formik methods 
const onSubmit = (values) => { 
    setisShow(true)
    setinitialValues(values)
}
const validationSchema =
    Yup.object({
        name:Yup.string() .max(15,"Must be 15 characters or less").required("Required"),
        contact:Yup.string().max(20,"Must be 20 words or less") .required('Required'),
        email:Yup.string().email("Inavlid email address").required("required"),
        password:Yup.string()
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
        .required('Required'),
        confirmpassword:Yup.string()
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
        .required('Required'),
       
    })




    return( 
        <div>
           <NavbarComponent/>
           <div className='mx-auto max-w-screen-lg bg-teal-100   lg:w-full lg:h-full p-5   mt-10  py-12 flex flex-col justify-center items-center'>
            <h1 className='font-sans font-bold mb-5 text-gray-900 text-4xl'>Sign Up</h1>
        <div className=' w-full h-full mr-5 ml-5 '> 
        <Formik className="formik" initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => (
         <Form className='w-full h-1/4 mx-auto py-5'>
      <MyTextInput label=" Name" name="name" type="text" />
      <MyTextInput label="Contact" name="contact" type="text"  />    
      <MyTextInput label="Email Address" name="email" type="email" /> 
      <MyPasswordInput label='PassWord' name='password' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
       <MyPasswordInput label='ConfirmPassWord' name='confirmpassword' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
       

       <p className='ml-4 text-sm'>  Already have an account</p>
      <div className='w-full gap-2 flex justify-start ml-2 items-center mt-2 '>
            <hr className='w-2/5 h-1 bg-gray-500'></hr>
            <p className='font-sans text-sm text-green-900 font-bold '>Login</p>
            <hr className='w-2/5 h-1 bg-gray-500'></hr>

        </div>
      <button type="submit" className='w-1/4 h-10 rounded text-2xl font-bold flex justify-center items-center mx-auto  mt-8 bg-green-950  text-white' >Login</button>
      
      {isShow ? ( <div className='bg-teal-500 absolute xl:bottom-1 bottom-1/4 w-full p-5 left-1/4 h-1/4  opacity-90 '>
             <div>
                <p>Name: {initialValues.name}</p>
                <p>Contact: {initialValues.contact}</p>

                <p>Email: {initialValues.email}</p>
                <p>PassWord: {initialValues.password}</p>
                <p>Cpassword: {initialValues.confirmpassword}</p>

                </div>
            <div className='w-full flex  mt-5 mb-5 justify-around items-center'>

                <Link to='/LoginPage'  className='w-1/4 h-1/4 text-white mb-5 rounded bg-green-950'>
                <button type="reset" className='block items-center justify-center ' onClick={()=>
                {formik.resetForm();
                    setisShow(false)
                }} >Confirm</button>
                </Link>
                
                <button className='w-1/4 h-1/4  text-white mb-5 rounded bg-green-950' onClick={()=> {
                    setisShow(false)
                }}>Edit</button>
            </div>
        </div>) : null }
    </Form> 
        )}
      </Formik>
         </div>
         </div>
        
        </div>
     
       
     );
 };

 const ImagePage = () => {
    return(

        <div className='left-div'>
           <div className='opportunity'>
            <h1>Opportunity is <br/>everywhere</h1>
            <p>Make the most of your time on the road on<br/> the platform with the most of active riders</p>
           </div>
            <img src={cap} alt='capture' className='image'/>
    
        </div>
    )
 }

export default SignUpPage














