import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const drawerWidth = 240

export default function SideBarNav({ sections, basePath = '' }) {
    const [open, setOpen] = useState(false)
    const toggleDrawer = (newOpen) => () => setOpen(newOpen)

    return (
        <>
            <button
                onClick={toggleDrawer(true)}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 8,
                    margin: 8,
                    transition: 'opacity 0.3s',
                    opacity: 0.4
                }}
                aria-label="Open section menu"
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.4}
            >
                <ArrowCircleRightIcon fontSize='large' />
            </button>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text)',
                    }
                }}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <List>
                    {sections.map(section => (
                        <ListItem
                            key={section.path}
                            component={NavLink}
                            to={`${basePath}/${section.path}`}
                            onClick={() => {
                                setOpen(false)
                            }}
                            sx={{
                                transition: 'background 0.2s, color 0.2s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                    color: '#fff',
                                    cursor: 'pointer'
                                },
                                // color: selectedSection === item ? '#fff' : 'var(--text)'
                            }}
                            style={({ isActive }) => ({
                                // color: isActive ? '#1976d2' : 'var(--text)',
                                color: 'var(--text)',
                                fontWeight: isActive ? 'bold' : 'normal',
                                textDecoration: 'none'
                            })}
                        >
                            <ListItemText
                                primary={section.name}
                                style={{
                                    cursor: 'pointer',
                                    // fontWeight: selectedSection === item ? 'bold' : 'normal'

                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}