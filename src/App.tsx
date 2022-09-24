import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import ErrorPage from './error-page';
import HomePage from './pages/home';


const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomePage/>),
        errorElement: <ErrorPage />,
    }
]);

export default function App(){
    return (<>
        <RouterProvider router={router} />
    </>)
}