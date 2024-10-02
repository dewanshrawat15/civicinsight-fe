import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../workflows/HomePage";
import { LoginPage } from "../workflows/LoginPage";
import { DashboardPage } from "../workflows/DashboardPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <HomePage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
]);
