import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendParcel/sendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/myParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";


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
      },
      {
        path :'/rider',
        element :<PrivateRoute>
           <Rider></Rider>
        </PrivateRoute>
      },
      {
        path :'/send-parcel',
       element:<PrivateRoute>
         <SendParcel></SendParcel>
       </PrivateRoute>,
       loader : () => fetch('/ServiceCenter.json').then(res => res.json())
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
  },
  {
    path :'/dashboard',
    element : <PrivateRoute>
       <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children : [
   {
    path :'my-parcels',
    element : <MyParcels></MyParcels>
   },
   {
    path :'payment/:parcelId',
    element : <Payment></Payment>
   },
   {
    path: 'payment-success',
    element: <PaymentSuccess></PaymentSuccess>
   },
   {
    path: 'payment-cancelled',
    element: <PaymentCancelled></PaymentCancelled>
   }
    ]

  }
]);