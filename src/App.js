import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Login from "./component/Login/Login";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default App;
