import { createBrowserRouter } from "react-router-dom";
/* import App from "../App"; */
import Layout from "../Layout/Layout";
import Notfound from "../Pages/NotFound/Notfound";
import Data from "../Pages/Data/Data";
import SignUp from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login"
import Payment from "../Pages/Payment/Payment";
import Confirmation from "../Pages/Confirmation/Confirmation";
const router = createBrowserRouter([
{
    path:"/",
    element:<Layout/>,
    errorElement:<Notfound/>,
    children:[/*
    {
        path:"/"
        element: página de home
    },
    {
        path:"/price"
        element: página de comparador de precios
    },*/
    {
        path:"/data",
        element: <Data/>
    },
    {
        path:"/confirmation",
        element: <Confirmation/>
    },
    {
        path:"/payment",
        element:<Payment/>
    }
    ]
},
{
    path:"/signup",
    element:<SignUp/>
},
{
    path:"/login",
    element:<Login/>
}
])


export default router