import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const Layout = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPreloader(false);
        }, 2000)
    }, []);

    return (
        <div className="wrapper">
            {showPreloader && <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
            </div>}
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;