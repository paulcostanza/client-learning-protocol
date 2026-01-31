import NavBar from './NavBar';
import SideBarNav from './SideBarNav'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation()
    const hideFooter = location.pathname.startsWith('/basics/testing/') // for Workspace
    return (
        <>
            <NavBar />
            {/* <SideBarNav /> Don't know how to get this set up yet!! */}
            <Outlet /> {/* This is where the page content will be rendered */}
            {!hideFooter && <Footer />}
        </>
    );
}
