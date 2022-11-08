import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../pages/addservices/AddServices";
import Home from "../../pages/Home/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addservice",
        element: <AddServices />,
      },
    ],
  },
]);

export default router;
