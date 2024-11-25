import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;