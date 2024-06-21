import { createBrowserRouter } from "react-router-dom";
/* import App from "../App"; */
import Layout from "../Layout/Layout";
import Notfound from "../Pages/NotFound/Notfound";
import Home from "../Pages/Home/Home";
import PriceComparator from "../Pages/PriceComparator/PriceComparator";
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
        path:"/price",
        element:<PriceComparator/>
    },]/*
    {
        path:"/data"
        element: página de datos
    },
    {
        path:"/confirmation"
        element: página de confirmación
    },
    {
        path:"/signin"
        element: página de registro
    },
    {
        path:"/login"
        element:página de login
    }
]*/

}])

export default router