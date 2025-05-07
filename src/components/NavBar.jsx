import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NavBar() {

    const [activeLink, setActiveLink] = useState(''); // Default active link

    useEffect(() => {
        const currentPath = location.pathname.substring(1)
        setActiveLink(currentPath || 'home')
    }, [location])



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="logo">
                    {/* <!-- Where img logo will go when i make one--> */}
                    {/* <!-- classes I might need: col-lg-12 --> */}
                    <a className="navbar-brand text-center" href="#">
                        {/* <!-- <img src="" alt="" width="50" height="30" /> --> */}

                        Client Learning Protocol</a>
                </div>

                {/* Hamburger button when screen is small*/}
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu when screen is big */}
                <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {[
                            { to: '/home', name: 'home', label: 'Home' },
                            { to: '/intro', name: 'intro', label: 'Intro' },
                            { to: '/python', name: 'python', label: 'Python' },
                            { to: '/java', name: 'java', label: 'Java' },
                            { to: '/csharp', name: 'csharp', label: 'C#' },
                            { to: '/react', name: 'react', label: 'React' },
                            { to: '/flashcards', name: 'flashcards', label: 'Flash Cards' },
                            { to: '/quiz', name: 'quiz', label: 'Quiz' },
                            { to: '/about', name: 'about', label: 'About' },
                        ].map(link => (
                            <li className="nav-item" key={link.name}>
                                <Link to={link.to} className={`nav-link ${activeLink === link.name ? 'active' : ''}`}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>



                    {/* Drop down menu I would like to eventually add to website */}

                    {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Section
                            </a>
                            <ul className="dropdown-menu side-bar" aria-labelledby="navbarDropdown">
                                <li><a className="nav-link" href="#introduction-to-computers">
                                    Introduction to Computers
                                </a>
                                </li>
                                <li><a className="nav-link" href="java.html">
                                    Java
                                </a>
                                </li>
                            </ul>
                        </li> */}



                    {/* SEARCH BAR - I would like to add this back in...eventually */}
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}