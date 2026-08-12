import React, { Children, useEffect } from "react";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectedRoutes from "../Routes/ProtectedRoutes";
import PublicRoutes from "../Routes/PublicRoutes";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";


const AppRoutes = () => {
  let Dispatch = useDispatch();

  const hydration = () => {
    console.log("chalra hu");

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("bhai kuch invalid h");
      return;
    };

    Dispatch(addUser(loggedInUser));

    console.log(loggedInUser);
    
  };

  useEffect(() => {
    hydration();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
