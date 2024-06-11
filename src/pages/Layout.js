import React from 'react';
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <footer>See you</footer>
        </div>
    );
};

export default Layout;