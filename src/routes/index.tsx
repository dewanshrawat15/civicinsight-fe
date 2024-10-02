import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../workflows/HomePage";
import { LoginPage } from "../workflows/LoginPage";
import { DashboardPage } from "../workflows/DashboardPage";
import { RegisterPage } from "../workflows/RegisterPage";
import { RegisterNewComplaint } from "../workflows/RegisterNewComplaint";
import { ComplaintStatus } from "../workflows/ComplaintStatus";
import { ComplaintHistory } from "../workflows/ComplaintHistory";

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
        element: <RegisterPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
    {
        path: "/complaint/register",
        element: <RegisterNewComplaint />,
    },
    {
        path: "/complaint/status",
        element: <ComplaintStatus />,
    },
    {
        path: "/complaint/history",
        element: <ComplaintHistory />,
    },
]);
