import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import GellaryPage from "../pages/gellary/GellaryPage";
import About from "../pages/About/About";
import ContactForm from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/gellary",
        element: <GellaryPage />,
      },
    ],
  },
]);

export default router;
