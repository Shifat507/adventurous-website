import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Blogs from './Blogs';
import { Link, useLoaderData } from 'react-router-dom';
import Blog from './Blog';
import adventureBanner from '../assets/adventure-title.png'
import QuesAns from './QuesAns';
const Home = () => {
    const blogsData = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <main className='w-11/12 mx-auto '>
                <div className='my-10 '>

                    <div className='flex justify-center'>
                        <img className='w-2/4' src={adventureBanner} alt="" />
                    </div>

                </div>
                <div className='my-10 grid lg:grid-cols-2 gap-8'>

                    {
                        blogsData.slice(0, 4).map((blog, idx) => <Blog key={idx} blog={blog}></Blog>)
                    }
                </div>
                <div className='flex justify-center my-6'>
                    <Link to='/blogs' className="bg-green-700 text-white font-semibold text-md rounded-lg px-8 py-2 hover:bg-green-900">Show All</Link>
                </div>
                <div className='my-10'>

                    <QuesAns></QuesAns>
                </div>
            </main>
        </div>
    );
};

export default Home;