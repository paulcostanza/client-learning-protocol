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

const pages = ['Learn', 'Practice', 'Quiz', 'About'] // Challenges, games, blog...whenever I get to it
const profile = ['Profile'] // Profile, Account Settings, Login/Logout

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
        category: "Web Tech",
        sections: [
            { label: "HTML", href: "/html" },
            { label: "Web APIs", href: "/web-api" },
            { label: "Docker", href: "/docker" },
            // { label: "HTTP/HTTPS", href: "/http" },
            // { label: "Auth[entication/orization]", href: "/auth" },
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
            { label: "JavaScript", href: "/javascript" },
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
            { label: "SQL", href: "/sql" },
            { label: "Redis", href: "/redis" },
        ]
    },
]

const practiceSections = [
    { label: "Python", href: "practice/python" },
]

// for when I split quiz section up
const quizSections = [
    { label: "Select a Quiz", href: "/quiz/select-a-quiz" },
    { label: "Select a Question", href: "/quiz/select-a-question" },
]

const aboutSections = [
    { label: "CLP", href: "/about/clp" },
    { label: "Me", href: "/about/me" },
]

export default function NavBar() {

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [anchorElLearning, setAnchorElLearning] = useState(null)
    const [anchorElAbout, setAnchorElAbout] = useState(null)
    const [anchorElQuiz, setAnchorElQuiz] = useState(null)
    const [anchorElPractice, setAnchorElPractice] = useState(null)

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

    const handleOpenQuizMenu = (event) => {
        setAnchorElQuiz(event.currentTarget)
    }

    const handleCloseQuizMenu = (event) => {
        setAnchorElQuiz(null)
    }

    const handleOpenPracticeMenu = (event) => {
        setAnchorElPractice(event.currentTarget)
    }

    const handleClosePracticeMenu = (event) => {
        setAnchorElPractice(null)
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
                        {/* ***************************** D E S K T O P ***************************** */}
                        {/* ******************************** L O G O ******************************** */}
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
                        {/* **************************** L E A R N I N G **************************** */}
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
                            {/* **************************** P R A C T I C E **************************** */}
                            <Box>
                                <Button
                                    sx={{ my: 2, color: 'white' }}
                                    onClick={handleOpenPracticeMenu}
                                    to="/practice"
                                >
                                    PRACTICE
                                </Button>
                                <Menu
                                    anchorEl={anchorElPractice}
                                    open={Boolean(anchorElPractice)}
                                    onClose={handleClosePracticeMenu}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: "#23272a",
                                            color: "#fff",
                                            borderRadius: 4,
                                            boxShadow: 9,
                                        }
                                    }}
                                >
                                    {practiceSections.map(section => (
                                        <MenuItem key={section.label} onClick={handleClosePracticeMenu}>
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
                            {/* ******************************** Q U I Z ******************************** */}
                            <Box>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    onClick={handleOpenQuizMenu}
                                    to="/quiz"
                                >
                                    QUIZ
                                </Button>
                                <Menu
                                    anchorEl={anchorElQuiz}
                                    open={Boolean(anchorElQuiz)}
                                    onClose={handleCloseQuizMenu}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: "#23272a",
                                            color: "#fff",
                                            borderRadius: 4,
                                            boxShadow: 9,
                                        }
                                    }}
                                >
                                    {quizSections.map(section => (
                                        <MenuItem key={section.label} onClick={handleCloseQuizMenu}>
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
                            {/* ******************************* A B O U T ******************************* */}
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
                            <Tooltip title="User Profile">
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
                                PaperProps={{
                                    sx: {
                                        backgroundColor: "#23272a"
                                    }
                                }}
                            >
                                {profile.map((option) => (
                                    <MenuItem key={option} onClick={handleCloseUserMenu} style={{ backgroundColor: '212529' }}>
                                        <Link
                                            to={"/user/profile"}
                                            style={{
                                                textAlign: 'center',
                                                textDecoration: 'none',
                                                color: 'white',
                                                width: '100%',
                                                display: 'block'
                                            }}
                                        >
                                            {option}
                                        </Link>
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