import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth"
import {doc,setDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import {db} from '../Firebase.config'
import {toast} from 'react-toastify'
import googleicon from '../images/Google.png'
import { async } from "@firebase/util"
function Oauth() {
    const navigate = useNavigate()
    const location = useLocation()

const ongoogle =  async () => {
 try {

    const auth = getAuth()
    const provider =new GoogleAuthProvider()
    const result = await signInWithPopup(auth,provider)
    const user = result.user

    //check for user

    const docref = doc(db,'users', user.uid)
    const docsnap = await getDoc(docref)
    // if user, doesn't exist

if (!docsnap.exists()){
    await setDoc(doc(db, 'users',user.uid),{
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp(),
    })
}

navigate('/')
    
 } catch (error) {
    console.log(error)
    toast.error("sorry, kindly try again")
 }

}


  return (
    <div className='googlesign'>
  <p>
  <h2>  Sign {location.pathname === '/login' ? 'in' : 'up' } with
  </h2>
  </p>
  <button className="googlebutton" onClick={ongoogle}> 
    <img className="googleiconimg" src={googleicon} alt="google icon" />
  </button>
    </div>
  )
}

export default Oauth
