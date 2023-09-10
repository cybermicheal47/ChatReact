
import Chat from './components/Chat';
import Login from './components/Login';
import Homepage from './components/Hompage';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Forgotpassword from './components/Forgotpassword';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
  <Router>
<Routes>


<Route path='/signup' element={<Signup/>}  
			/>

<Route path='/' element={<Login/>}  
			/>
			<Route path='/forgotpassword' element={<Forgotpassword/>}  
			/>

<Route path='/profile' element={<Profile/>}  
			/>
     
 
  </Routes>
  </Router>
    </>
  );
}

export default App;
