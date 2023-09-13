import React from 'react';
import Loginimg from '../images/login.jpg';
import { Link ,  useNavigate} from 'react-router-dom';
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast} from 'react-toastify'
import Oauth from './Oauth';
function Login() {

const[formdata, setformdata] = useState({
  email: '',
  password: '',
}) 

const{ email, password} = formdata


const navigate = useNavigate()
 const onChange =(e) => {
 setformdata((prevstate)=>({
  ...prevstate, 
  [e.target.id] : e.target.value,

 }))
 }



 

const onSubmit = async  (e) => {
  e.preventDefault()


  try {
    const auth =getAuth()
    const userCredentials =await signInWithEmailAndPassword (auth, email,password)
    if(userCredentials.user){
      navigate('/chat')
    }
   
  } catch (error) {
    toast.error("User Credentials Incorrect")
     console.log(error)
  }
}

  return (
    <div>
      <center><h1> Login</h1></center>

      <div className="container">
        <div className="image-container">
          <img src={Loginimg} alt="Your Image" />
          <p className="image-attribution">Image by Freepik.com</p>
        </div>

    

          <form onSubmit={onSubmit}>
           


            <div>
              <label htmlFor="user_email">Email Address:</label>
              <input type="email" id="email" value={formdata.email} onChange={onChange} name="email" placeholder="youknow@example.com"  />
            </div>



            <label htmlFor="psw"><b>Password</b></label>
            <input    type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            required  />

            

            <div><button type="submit">Login</button></div>
          </form>
        
        
        </div>
        <Oauth />

        <Link to="/forgotpassword" className="button-link redcolor"  >
                                    Forgotpassword ?
                                </Link>
                                <br/>

        <Link to="/signup"  className="button-link" >
                                    Don't have an account? Sign Up
                                </Link>

      </div>
   
  );
}

export default Login;
