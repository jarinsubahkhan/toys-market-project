import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/Home/AddToy/AddToy";
import MyToys from "../pages/Home/MyToys/MyToys";
import AllToys from "../pages/Home/AllToys/AllToys";
import Blogs from "../pages/Home/Blogs/Blogs";
import ToyDetails from "../pages/Home/ToyDetails/ToyDetails";
import ModalUpdate from "../pages/Home/ModalUpdate/ModalUpdate";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../NotFound/NotFound";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/addToys',
            element: <AddToy></AddToy> ,
        },
        {
            path:'/myToys',
            element: <MyToys></MyToys> ,
        },
        {
            path:'/allToys',
            element: <AllToys></AllToys> ,
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs> ,
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
        },
        {
          path:'/updateToys/:id',
          element: <ModalUpdate></ModalUpdate>
        },
        {
          path:'*',
          element:<NotFound></NotFound>
        }

      ]
    },
  ]);

  export default router;