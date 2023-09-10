import React from 'react';
import Signupimg from '../images/signup.jpg';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <center><h1> Create An Account With Us</h1></center>

      <div className="container">
        <div className="image-container">
          <img src={Signupimg} alt="Your Image" />
          <p className="image-attribution">Image by Freepik.com</p>
        </div>

    

          <form action="" method="post">
            <label htmlFor="first_name">Full Name:</label>
            <input type="text" name="fullname" id="fullname" />


            <div>
              <label htmlFor="user_email">Email Address:</label>
              <input type="email" id="user_email" name="email" placeholder="youknow@example.com" />
            </div>

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"  />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            

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
