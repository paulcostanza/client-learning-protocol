import NavBar from './NavBar';
import SideBarNav from './SideBarNav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <NavBar />
            {/* <SideBarNav /> Don't know how to get this set up yet!! */}
            <Outlet /> {/* This is where the page content will be rendered */}
            <Footer />
        </>
    );
}
