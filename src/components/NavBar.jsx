// import { Nav, NavLink, NavMenu } from './NavbarElements'

export default function NavBar() {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* <!-- Where img logo will go when i make one--> */}
                {/* <!-- classes I might need: col-lg-12 --> */}
                <a className="navbar-brand text-center" href="#">
                    {/* <!-- <img src="" alt="" width="50" height="30" /> --> */}

                    Client Learning Protocol</a>

                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>


                        <li className="nav-item dropdown">
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
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}