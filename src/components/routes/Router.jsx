import { RouterProvider } from "react-router";
import Home from '../Home/Home';
import NavigationBar from '../NavigationBar/NavigationBar.jsx'
import ProductPage from '../Product/ProductPage.jsx'
import ErrorPage from '../Error/ErrorPage.jsx'
import { createBrowserRouter } from 'react-router-dom'
import About from "../About/About";
import Cart from "../Cart/Cart";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    );
}



const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <ProductPage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/checkout",
                element: <Cart />
            },
        ]
    }
]);

function Router() {
    return (
        <RouterProvider router={router} />
    );
}

export default Router;