import { useLocation,Outlet,Navigate } from "react-router-dom";
export default function PrivateRouter(){

    const location = useLocation();

    return (
        <>
         {location.state ? <Outlet/> : <Navigate to="/login"/> }
        </>
    )
}