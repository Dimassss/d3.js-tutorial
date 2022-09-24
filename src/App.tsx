import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import ErrorPage from './error-page';
import HomePage from './pages';
import SmilePage from './pages/smile';


const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomePage/>),
        errorElement: <ErrorPage />,
    },
    {
        path: 'smile',
        element: (<SmilePage/>)
    }
]);

export default function App(){
    return (<React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>)
}