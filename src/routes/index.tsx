import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import Settings from '../views/Settings';
import DashBoard from "../views/Dashboard";
import NotFound from '../views/NotFound';
import SignIn from "../views/SingIn";
import SignUp from "../views/SignUp";
import Form from "../views/Form";
import PrivateRoute  from "./private";
import { AuthProvider } from '../context/Auth';

const router = createBrowserRouter([
    {
        path: "/tp1/",
        element: <Home />,
    },
    {
        path: "/tp1/signin",
        element: <PrivateRoute element={<SignIn />} />,
    },
    {
        path: "/tp1/signup",
        element: <PrivateRoute element={<SignUp />} />,
    },
    {
        path: "/tp1/settings",
        element: <Settings />,
    },
    {
        path: "/tp1/dashboard",
        element: <DashBoard />,
    },
    {
        path: "/tp1/form",
        element: <Form />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const routes = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
}

export default routes;