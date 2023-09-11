import React from 'react';
import Signupimg from '../images/signup.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc,doc, serverTimestamp  } from 'firebase/firestore';

import {db} from '../Firebase.config'

import { toast} from 'react-toastify'


function Signup() {
const navigate = useNavigate()
const[formdata, setformdata] = useState({
  name : '',
  email: '',
  password: ''
})






const onChange = (e) => {
  setformdata((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value,
  }));
};



const onSubmit = async (e) => {
  e.preventDefault()

  try {
   const auth = getAuth()
   const usercredentials = await createUserWithEmailAndPassword(auth,formdata.email,formdata.password) 

   const user = usercredentials.user

updateProfile(auth.currentUser,{
  displayName: formdata.name ,
  
})


const formdatacopy = {...formdata}
delete formdatacopy.password
formdatacopy.timestamp = serverTimestamp()
await setDoc(doc(db, 'users', user.uid), formdatacopy)



     navigate('/')
  } catch (error) {
    toast.error("something went wrong, try again ")
    console.log(error)
    
  }
}


  return (
    <div>
      <center><h1> Create An Account With Us</h1></center>

      <div className="container">
        <div className="image-container">
          <img src={Signupimg} alt="Your Image" />
          <p className="image-attribution">Image by Freepik.com</p>
        </div>

    

          <form onSubmit={onSubmit}>
            <label htmlFor="first_name">Full Name:</label>
            <input type="text" name="name" id="name"    value={formdata.name}
            onChange={onChange} />


            <div>
              <label htmlFor="user_email">Email Address:</label>
              <input type="email" id="email" name="email" value={formdata.email} onChange={onChange} placeholder="youknow@example.com" required />
            </div>
          
           
            <label htmlFor="psw"><b>Password (at least six characters)</b></label>
            <input    type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={formdata.password}
            onChange={onChange}
            required  />

            

            <div><button type="submit">Create Account</button></div>
          </form>
        </div>

        <Link  to='/'  >
                                    Already have an account? Sign in
                                </Link>
      </div>
   
  );
}

export default Signup;
