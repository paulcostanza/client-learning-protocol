import { Link } from 'react-router-dom'

export default function NavBar() {


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
                {/* <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/intro" className="nav-link">Intro</Link>

                        </li>

                        <li className="nav-item">
                            <Link to="/java" className="nav-link">Java</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/quiz" className="nav-link">Quiz</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>

                        </li>


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

                    </ul>

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