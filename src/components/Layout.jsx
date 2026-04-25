import NavBar from './NavBar';
import SideBarNav from './SideBarNav'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation()
    const homePage = location.pathname === '/' || location.pathname === '/home' ? true : false
    const hideFooter = location.pathname.startsWith('/practice/python/') // for Workspace
    return (
        <>
            <NavBar />
            {/* <SideBarNav /> Don't know how to get this set up yet!! */}
            {homePage ?
                (
                    <div className='home-page-animations'>
                        <div className="top-right"></div>
                        <div className="middle-left"></div>
                        <Outlet />
                    </div>

                )
                : (
                    <>
                        <Outlet />
                        {!hideFooter && <Footer />}
                    </>
                )}
        </>
    );
}
