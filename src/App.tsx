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
import VegaPage from './pages/vega';


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
    },
    {
        path: 'vega',
        element: (<VegaPage/>)
    }
]);

export default function App(){
    return (<>
        <RouterProvider router={router} />
    </>)
}