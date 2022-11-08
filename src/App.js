import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./component/Router/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto bg-base-200">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
