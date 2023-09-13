
import Chat from './components/Chat';
import Login from './components/Login';
import Homepage from './components/Hompage';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Forgotpassword from './components/Forgotpassword';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Hompage from './components/Hompage';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import  Privateroute from './components/Privateroute';


function App() {
  return (
  <>
  <Router>
<Routes>


<Route path='/signup' element={<Signup/>}  
			/>

<Route path='/chat' element={<Chat/>}  
			/>
      <Route path='/' element={<Hompage/>}  
			/>
      <Route path='/login' element={<Login/>}  
			/>
			<Route path='/forgotpassword' element={<Forgotpassword/>}  
			/>
      

<Route path='/profile' element={<Privateroute/>}>  

<Route path='/profile' element={<Profile/>}  
			/>
			</Route>
     
 
  </Routes>
  </Router>
  <ToastContainer />
    </>
  );
}

export default App;
