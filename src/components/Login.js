import React from 'react';
import Loginimg from '../images/login.jpg';
import { Link ,  useNavigate} from 'react-router-dom';
import { useState } from "react"

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



  return (
    <div>
      <center><h1> Login</h1></center>

      <div className="container">
        <div className="image-container">
          <img src={Loginimg} alt="Your Image" />
          <p className="image-attribution">Image by Freepik.com</p>
        </div>

    

          <form action="" method="post">
           


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


        <Link to="/forgotpassword"  >
                                    Forgotpassword
                                </Link>
                                <br/>

        <Link to="/signup"  >
                                    Don't have an account? Sign Up
                                </Link>
        
      </div>
   
  );
}

export default Login;
