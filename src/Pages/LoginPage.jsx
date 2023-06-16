
import  React from 'react'
import  ReactDOM from 'react-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage,useField, useFormik} from "formik";
import * as Yup from 'yup'
// import '../Components/styleForm.css'
// import eye from '../resource/'
// import eye from '../resources/eye.png'
// import hideeye from '../resources/eye-1.png'
// import cap from '../resources/banana.jpg'
import  eye from '../resource/eye.png'
import hideeye from '../resource/eye-1.png'
import cap from '../resource/banana.jpg'
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent';

import { Link } from 'react-router-dom';

const MyTextInput = ({label, setradioInput,  ...props}) =>{
    const [field, meta] = useField(props);
    return (
        <div className='w-3/4 mx-auto h-full flex flex-col p-3 bg-gray-200 mb-3'>
        <label htmlFor={props.id || props.name} className='text-lg font-sans font-bold text-gray-500'>{label}</label>
        <input className='w-full h-7 bg-teal-50 border-solid-3 border-gray-300 rounded-md' {...field} {...props}/>
        {meta.touched && meta.error ?
         (<div className='text-red-500 text-sm '>{meta.error}</div>):null}

        </div>
    );
};
const MyPasswordInput = ({label, isvisible, handleHidePassword,handleShowPassword, ...props}) =>{
    
    const [field, meta] = useField(props);
    return (
        <div className='w-3/4 mx-auto h-full flex flex-col p-3 bg-gray-200 mt-3'>
        <label htmlFor={props.id || props.name} className='text-lg font-sans font-bold text-gray-500'>{label}</label>
       <div className='flex justify-end items-end'>
       <input  {...field} {...props} className=' w-full h-7 bg-teal-50 border-solid-3 border-gray-300 rounded-md'></input>
       {isvisible ==="password"?( <img  src={hideeye}  onClick={handleHidePassword} className=' absolute w-4 h-6 mb-0.5 rounded-sm bg-green-100 ' alt=""/>): (
                <img src={eye} alt=""  className=' absolute  w-4 h-6 mb-0.5 rounded-sm bg-green-50' onClick={handleShowPassword}/>
        )}
       </div>
        
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

//main Component
const LoginPage = () => {  

    //defined states
    const [isShow, setisShow] = useState(false);
     const [initialValues, setinitialValues]  = useState({
        firstName:"",
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
        firstName:Yup.string() .max(15,"Must be 15 characters or less").required("Required"),
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
        <>
           <NavbarComponent/>
           <div className='mx-auto max-w-screen-xl bg-teal-50  py-12 flex flex-col justify-center items-center'>
            <h1 className='font-sans font-bold text-white text-gray-500 text-4xl'>Sign Up</h1>
        <div className='bg-teal-50 w-full h-full mr-5 ml-5 '> 
        <Formik className="formik" initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => (
         <Form className='w-1/2 h-1/4 mx-auto py-5'>
      <MyTextInput label=" Name" name="firstName" type="text" />
      <MyTextInput label="Contact" name="contact" type="text"  />    
      <MyTextInput label="Email Address" name="email" type="email" /> 
      <MyPasswordInput label='PassWord' name='password' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
       <MyPasswordInput label='ConfirmPassWord' name='confirmpassword' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
       

       <div className='flex flex-col justify-center items-start ml-20 mt-2'>
       <p className='have-account'>Already have an account?<Link to="/LoginPage">Login</Link></p>
          <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
          </MyCheckbox>
          <button type="submit" className='w-1/4 h-10 rounded-sm  mt-1 text-lg bg-green-950  text-white' >Sign up to drive</button>

           </div> 
      
      {isShow ? ( <div className='main-modal'>
             <div>
                <p>FirstName: {initialValues.firstName}</p>
                <p>LastName: {initialValues.lastName}</p>
                <p>Email: {initialValues.email}</p>
                <p>PassWord: {initialValues.origin}</p>
                <p>Origin: {initialValues.inviteCode}</p>
                <p>inviteCode: {initialValues.password}</p>

                </div>
            <div className='modal'>

                <Link to='/LoginPage'>
                <button type="reset" className='confirm' onClick={()=>
                {
                    formik.resetForm();
                    setisShow(false)
                }
                } >Confirm</button>

                </Link>
                
                <button className='Edit' onClick={()=> {
                    setisShow(false)
                }}>Edit</button>
            </div>
        </div>) : null }
    </Form> 
        )}
      </Formik>
         </div>
         </div>
        
        </>
     
       
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

export default LoginPage














