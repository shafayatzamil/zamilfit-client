import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../pages/addservices/AddServices";
import Blog from "../../pages/blog/Blog";
import Home from "../../pages/Home/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Service from "../../pages/service/Service";
import ServiceDetails from "../../pages/serviceDetails/ServiceDetails";

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
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://zamilfits-server-shafayatzamil.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
