import { Navigate, Outlet } from "react-router-dom"
import useAuthstatus from "../hooks/useAuthstatus"

const Privateroute = () => {
    const {loggedin, loading} = useAuthstatus()
    if (loading) {
     return  <h2>Loading...</h2>
    }



  return  loggedin ? <Outlet /> :  <Navigate to='/login' />
}

export default Privateroute