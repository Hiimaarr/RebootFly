import { createBrowserRouter } from "react-router-dom";
/* import App from "../App"; */
import Layout from "../Layout/Layout";
import Notfound from "../Pages/NotFound/Notfound";
import Data from "../Pages/Data/Data";
import SignUp from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login"
import Payment from "../Pages/Payment/Payment";
import Confirmation from "../Pages/Confirmation/Confirmation";
import Profile from "../Pages/Profile/Profile";
import Admin from "../Pages/Admin/Admin"
import Home from "../Pages/Home/Home";
import PriceComparator from "../Pages/PriceComparator/PriceComparator";
import TestSearchPage from "../Pages/TestSearchPage/TestSearchPage";
const router = createBrowserRouter([
{
    path:"/",
    element:<Layout/>,
    errorElement:<Notfound/>,
    children:[
    {
        path:"/",
        element:<Home/>
    }, 
    {
        path:"/data",
        element: <Data/>
    },
    {
        path:"/price",
        element:<PriceComparator/>
    },
    {
        path:"/confirmation",
        element: <Confirmation/>
    },
    {
        path:"/payment",
        element:<Payment/>
    },
   
    {
        path:"/search",
        element:<TestSearchPage/>
    },
    {
        path:"/Profile",
        element:<Profile/>
    },
]},
{
    path:"/signup",
    element:<SignUp/>
},
{
    path:"/login",
    element:<Login/>
},
{
    path:"/Admin",
    element:<Admin/>
}]
)


export default router