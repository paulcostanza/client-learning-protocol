import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import { useState } from 'react'

const drawerWidth = 240

export default function SideBarNav({ menuItems, selectedSection, setSelectedSection }) {
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
                sx={{ width: drawerWidth }}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            key={item}
                            selected={selectedSection === item}
                            onClick={() => {
                                setSelectedSection(item)
                                setOpen(false)
                            }}
                        >
                            <ListItemText
                                primary={item}
                                style={{
                                    cursor: 'pointer',
                                    fontWeight: selectedSection === item ? 'bold' : 'normal'
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}