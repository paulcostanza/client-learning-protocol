import { useState } from 'react'
import Introduction from './Introduction'
import CSharpBasics from './CSharpBasics'
import ControlFlow from './ControlFlow'
import MethodsAndFunctions from './MethodsAndFunctions'
import ObjectOrientedProgramming from './ObjectOrientedProgramming'
import ExceptionHandlings from './ExceptionHandling'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'


const drawerWidth = 240

const sectionComponents = {
    'Introduction': <Introduction />,
    'C# Basics': <CSharpBasics />,
    'Control Flow': <ControlFlow />,
    'Methods & Functions': <MethodsAndFunctions />,
    'Object Oriented Programming': <ObjectOrientedProgramming />,
    'Exception Handling': <ExceptionHandlings />
}

export default function CSharp() {
    const menuItems = Object.keys(sectionComponents)
    const [selectedSection, setSelectedSection] = useState(menuItems[0])
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

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
                    opacity: 0.4 // faded by default
                }}
                aria-label="Open section menu foo"
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.4}
            >
                <ArrowCircleRightIcon fontSize='large' />
            </button>
            <Drawer
                sx={{ widt: drawerWidth }}
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

            <main>
                <div className="container" id="">
                    {sectionComponents[selectedSection]}
                </div>
            </main >
        </>
    )
}