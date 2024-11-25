import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";

import Home from "../components/Home";
import Profile from "../components/Profile";

import HomeLayout from "../layouts/HomeLayout";

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement:<h1>Error Page</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/adventure-data.json')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: ()=> fetch('/adventure-data.json')
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },

        ]
    },
]);

export default router;