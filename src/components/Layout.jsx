import NavBar from './NavBar';
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet /> {/* This is where the page content will be rendered */}
            <Footer />
        </>
    );
}
