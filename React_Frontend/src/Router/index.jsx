import { createBrowserRouter } from "react-router-dom";
/* import App from "../App"; */
import Layout from "../Layout/Layout";
import Notfound from "../Pages/NotFound/Notfound";
<<<<<<< HEAD
import Data from "../Pages/Data/Data";
import SignUp from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login"
import Payment from "../Pages/Payment/Payment";
import Confirmation from "../Pages/Confirmation/Confirmation";
import Profile from "../Pages/Profile/Profile";
import Admin from "../Pages/Admin/Admin"
=======
import Home from "../Pages/Home/Home";
import PriceComparator from "../Pages/PriceComparator/PriceComparator";
>>>>>>> e8dd63269f5afe5c7ec8d35d85990cb1463e850f
const router = createBrowserRouter([
{
    path:"/",
    element:<Layout/>,
    errorElement:<Notfound/>,
<<<<<<< HEAD
    children:[/*
=======
    children:[
>>>>>>> e8dd63269f5afe5c7ec8d35d85990cb1463e850f
    {
        path:"/",
        element:<Home/>
    }, 
    {
<<<<<<< HEAD
        path:"/price"
        element: página de comparador de precios
    },*/
    {
        path:"/data",
        element: <Data/>
    },
=======
        path:"/price",
        element:<PriceComparator/>
    },]/*
>>>>>>> e8dd63269f5afe5c7ec8d35d85990cb1463e850f
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
},
{
    path:"/Profile",
    element:<Profile/>
},
{
    path:"/Admin",
    element:<Admin/>
}
])


export default router