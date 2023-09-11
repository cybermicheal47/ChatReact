import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  // You can also add a loading state while waiting for the authentication state to resolve.
  if (user === null) {
    return "Loading...";
  }


  const onlogout = () => {
    auth.signOut()
    navigate('/')
  }
  return user ? (
    <div>
      <h1>{user.displayName}</h1>
      <br />
      <button type="button" onClick={onlogout}> LOGOUT </button>

    </div>
  ) : (
    "Not Logged in"
  );
}

export default Profile;
