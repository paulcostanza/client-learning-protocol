import React, { useState } from 'react'
import Introduction from './Introduction'
import CSharpBasics from './CSharpBasics'
import ControlFlow from './ControlFlow'
import MethodsAndFunctions from './MethodsAndFunctions'
import ObjectOrientedProgramming from './ObjectOrientedProgramming'
import ExceptionHandlings from './ExceptionHandling'

import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240

const sectionComponents = {
    'Introduction': <Introduction />,
    'C# Basics': <CSharpBasics />,
    'Control Flow': <ControlFlow />,
    'Methods & Functions': <MethodsAndFunctions />,
    'Object Oriented Programming': <ObjectOrientedProgramming />,
    'Exception Handling': <ExceptionHandlings />
};

export default function CSharp() {
    const menuItems = Object.keys(sectionComponents)
    const [selectedSection, setSelectedSection] = useState(menuItems[0])
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    return (
        <>
            <button onClick={toggleDrawer(true)}>Click for different section</button>
            <Drawer
                sx={{ widt: drawerWidth }}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}

            >
                {/* <div>
                    <Typography variant='h5'>
                        C#
                    </Typography>
                </div> */}

                {/* List / links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            key={item}
                            selected={selectedSection === item}
                            onClick={() => setSelectedSection(item)}
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

                <div className="container" id="space-on-top-of-page">

                    {sectionComponents[selectedSection]}
                </div>

                {/* Review section for now */}
                <div className="container accordion" id="this-question">

                </div >

            </main >
        </>
    )
}