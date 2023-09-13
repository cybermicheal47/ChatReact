import React from 'react'
import homechatimg from '../images/homechat.png';
import { Link } from 'react-router-dom';
function Hompage() {
  return (
    <div className='homepage'>
    <img src={homechatimg} alt="Your Image" />

    <Link to="/signup" className="button-link">
  Don't have an account? Sign Up
</Link>

<Link to="/login" className="button-link">
  Already have an account? Log In
</Link>
    </div>
  )
}

export default Hompage
