import React from 'react';
import NavBar from "./NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

function MainLayOut() {
    return (
        <div>
            <NavBar/>
            <main className="pt-16">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default MainLayOut;