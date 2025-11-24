import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children : [
      {
        index : true,
        element : <Home></Home>
      },
      {
        path : '/coverage',
        element : <Coverage></Coverage>,
        loader : () => fetch('/ServiceCenter.json').then(res => res.json())
      },
      {
        path :'/about',
        element : <About></About>
      }
    ]
  },
  {
    path :'/',
    element : <AuthLayout></AuthLayout>,
    children : [
      {
        path :'/login',
        element: <Login></Login>
      },
      {
        path :'/register',
        element : <Register></Register>
      }
    ]
  }
]);