import { createBrowserRouter } from "react-router-dom";
/* import App from "../App"; */
import Layout from "../Layout/Layout";
import Notfound from "../Pages/NotFound/Notfound";
const router = createBrowserRouter([
{
    path:"/",
    element:<Layout/>,
    errorElement:<Notfound/>,
    /*children:[
    {
        path:"/"
        element: página de home
    },
    {
        path:"/price"
        element: página de comparador de precios
    },
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