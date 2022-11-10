import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./component/Router/Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto bg-base-200">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
