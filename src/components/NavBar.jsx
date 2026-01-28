import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Walley from '../assets/navbar/walley.png'
import CLPLogo from '../assets/navbar/clp-logo.png'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

const pages = ['Learning', 'Basics', 'Quiz', 'About'] // Challenges, games, blog...when ever I get to it
const settings = ['Login - Coming March 2026']

const learningSections = [
    {
        category: "Computer Science 101",
        sections: [
            { label: "Introduction to Computers", href: "/intro-to-comp" },
            { label: "Low-Level", href: "/lowlevel" },
            { label: "CyberSecurity", href: "/cybersecurity" },
        ]
    },
    {
        category: "Web Technologies",
        sections: [
            { label: "HTML", href: "/html" },
            // { label: "Web APIs", href: "/webapis" },
            // { label: "HTTP/HTTPS", href: "/http" },
            // { label: "DOM Manipulation", href: "/dom" },
            // { label: "Browser DevTools", href: "/devtools" },
            // { label: "Networking", href: "/networking" },
        ]
    },
    {
        category: "Languages",
        sections: [
            { label: "C", href: "/c" },
            { label: "C++", href: "/cpp" },
            { label: "C#", href: "/csharp" },
            { label: "Go", href: "/go" },
            { label: "Java", href: "/java" },
            { label: "Python", href: "/python" }
        ]
    },
    {
        category: "Frameworks & Libraries",
        sections: [
            { label: "React", href: "/react" },
        ]
    },
    {
        category: "Databases & Data Stores",
        sections: [
            { label: "Redis", href: "/redis" },
        ]
    },
]

const aboutSections = [
    { label: "CLP", href: "/about/clp" },
    { label: "Me", href: "/about/me" },
]

const basicsSections = [
    { label: "Testing", href: "basics/testing" },
]


export default function NavBar() {

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [anchorElLearning, setAnchorElLearning] = useState(null)
    const [anchorElAbout, setAnchorElAbout] = useState(null)
    const [anchorElBasics, setAnchorElBasics] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleOpenLearningMenu = (event) => {
        setAnchorElLearning(event.currentTarget)
    }
    const handleCloseLearningMenu = () => {
        setAnchorElLearning(null)
    }

    const handleOpenAboutMenu = (event) => {
        setAnchorElAbout(event.currentTarget)
    }

    const handleCloseAboutMenu = (event) => {
        setAnchorElAbout(null)
    }

    const handleOpenBasicsMenu = (event) => {
        setAnchorElBasics(event.currentTarget)
    }

    const handleCloseBasicsMenu = (event) => {
        setAnchorElBasics(null)
    }

    const [activeLink, setActiveLink] = useState('')
    const location = useLocation()

    useEffect(() => {
        const currentPath = location.pathname.substring(1)
        setActiveLink(currentPath || 'home')
    }, [location])

    return (
        <>

            <AppBar position="static" color="default" sx={{ backgroundColor: "#212529" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/* Desktop */}
                        <Box
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                height: 48
                            }}
                        >
                            <Link to="/home">
                                <img
                                    src={CLPLogo}
                                    alt="Logo"
                                    style={{
                                        height: 40,
                                        width: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleOpenLearningMenu}
                            >
                                LEARNING
                            </Button>
                            <Menu
                                anchorEl={anchorElLearning}
                                open={Boolean(anchorElLearning)}
                                onClose={handleCloseLearningMenu}
                                PaperProps={{
                                    sx: {
                                        backgroundColor: "#23272a",
                                        color: "#fff",
                                        borderRadius: 4,
                                        boxShadow: 9,
                                        maxHeight: 450,
                                    }
                                }}
                            >
                                {learningSections.map(section => (
                                    <div key={section.category}>
                                        <MenuItem disabled sx={{ opacity: 0.7, pl: 1, fontWeight: 'bold' }}>
                                            {section.category}
                                        </MenuItem>
                                        {section.sections.map(section => (
                                            <MenuItem key={section.label} onClick={handleCloseLearningMenu}>
                                                <Link
                                                    to={section.href}
                                                    style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'block' }}
                                                >
                                                    {section.label}
                                                </Link>
                                            </MenuItem>
                                        ))}
                                    </div>
                                ))}
                            </Menu>
                            {/* ************************************************************************* */}
                            <Box>
                                <Button
                                    sx={{ my: 2, color: 'white' }}
                                    onClick={handleOpenBasicsMenu}
                                    to="/basics"
                                >
                                    BASICS
                                </Button>
                                <Menu
                                    anchorEl={anchorElBasics}
                                    open={Boolean(anchorElBasics)}
                                    onClose={handleCloseBasicsMenu}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: "#23272a",
                                            color: "#fff",
                                            borderRadius: 4,
                                            boxShadow: 9,
                                        }
                                    }}
                                >
                                    {basicsSections.map(section => (
                                        <MenuItem key={section.label} onClick={handleCloseBasicsMenu}>
                                            <Link
                                                to={section.href}
                                                style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'block' }}
                                            >
                                                {section.label}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Button
                                sx={{ my: 2, color: 'white' }}
                                component={Link}
                                to="/quiz"
                            >
                                QUIZ
                            </Button>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    // component={Link}
                                    onClick={handleOpenAboutMenu}
                                    to="/about"
                                >
                                    ABOUT
                                </Button>
                                <Menu
                                    anchorEl={anchorElAbout}
                                    open={Boolean(anchorElAbout)}
                                    onClose={handleCloseAboutMenu}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: "#23272a",
                                            color: "#fff",
                                            borderRadius: 4,
                                            boxShadow: 9,
                                        }
                                    }}
                                >
                                    {aboutSections.map(section => (
                                        <MenuItem key={section.label} onClick={handleCloseAboutMenu}>
                                            <Link
                                                to={section.href}
                                                style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'block' }}
                                            >
                                                {section.label}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: '#fff' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Mobile */}
                        <Box
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                alignItems: 'center',
                                flexGrow: 1,
                                height: 48
                            }}
                        >
                            <Link to="/home" style={{ display: 'block' }}>
                                <img
                                    src={CLPLogo}
                                    alt="Logo"
                                    style={{
                                        height: 32,
                                        width: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </Link>
                        </Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            PaperProps={{
                                sx: {
                                    backgroundColor: "#23272a",
                                    color: "#fff",
                                    borderRadius: 1,
                                    boxShadow: 9,
                                    maxHeight: 350,
                                    overflow: 'auto',
                                    display: { xs: 'block', md: 'none' }
                                }
                            }}
                        >
                            {/* Learning section */}
                            {learningSections.map(section => (
                                <div key={section.category}>
                                    <MenuItem disabled sx={{ opacity: 0.7, pl: 1, fontWeight: 'bold' }}>
                                        {section.category}
                                    </MenuItem>
                                    {section.sections.map(sub => (
                                        <MenuItem key={sub.label} onClick={handleCloseNavMenu}>
                                            <Link
                                                to={sub.href}
                                                style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'block' }}
                                            >
                                                {sub.label}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </div>
                            ))}
                            {/* Practice section */}
                            <MenuItem disabled sx={{ opacity: 0.7, pl: 1, fontWeight: 'bold' }}>
                                Practice
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link
                                    to="/quiz"
                                    style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'block' }}
                                >
                                    Quiz
                                </Link>
                            </MenuItem>
                            {/* About section */}
                            <MenuItem disabled sx={{ opacity: 0.7, pl: 1, fontWeight: 'bold' }}>
                                About
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{ pl: 3 }}>
                                <Link
                                    to="/about/clp"
                                    style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'block' }}
                                >
                                    CLP
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{ pl: 3 }}>
                                <Link
                                    to="/about/me"
                                    style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'block' }}
                                >
                                    Me
                                </Link>
                            </MenuItem>
                        </Menu>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Walley" src={Walley} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}