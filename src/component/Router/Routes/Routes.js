import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../pages/login/Login";
import Register from '../../pages/register/Register'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },

        ]
    }
])

export default router;