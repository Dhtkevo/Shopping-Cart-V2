import { RouterProvider } from "react-router";
import Home from '../Home/Home';
import NavigationBar from '../NavigationBar/NavigationBar.jsx'
import ProductPage from '../Product/ProductPage.jsx'
import ErrorPage from '../Error/ErrorPage.jsx'
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <NavigationBar />,
            }
        ]
    },
    {
        path: "products",
        element: <ProductPage />,
        children: [
            {
                path: "/products",
                element: <NavigationBar />
            }
        ]
    },
]);

function Router() {
    return (
        <RouterProvider router={router} />
    );
}

export default Router;