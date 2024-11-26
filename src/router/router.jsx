import AboutUs from "../components/AboutUs";
import BlogDetails from "../components/BlogDetails";
import Blogs from "../components/Blogs";

import Home from "../components/Home";
import Profile from "../components/Profile";

import HomeLayout from "../layouts/HomeLayout";

import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: '/blogDetails/:id',
                element: <PrivateRoute>
                    <BlogDetails></BlogDetails>
                </PrivateRoute>,
                loader: async ({params}) =>{
                    const res = await fetch('/adventure-data.json')
                    const data = await res.json()

                    const singleData = data.find(d => d.id == params.id)

                    return singleData;
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            }

        ]
    },
]);

export default router;