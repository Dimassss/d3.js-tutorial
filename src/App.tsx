import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import ErrorPage from './error-page';
import HomePage from './pages';
import CssColourNames from './pages/css-colour-names';
import ReactMouseCircleFollower from './pages/react-mouse-circle-follower';
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
    },
    {
        path: 'react-mouse-circle-follower',
        element: (<ReactMouseCircleFollower/>)
    },
    {
        path: 'css-colour-names',
        element: (<CssColourNames/>)
    }
]);

export default function App(){
    return (<React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>)
}