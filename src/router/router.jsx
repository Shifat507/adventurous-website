import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";
import Header from "../components/Header";
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
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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