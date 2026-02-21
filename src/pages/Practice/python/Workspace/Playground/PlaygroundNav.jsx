import { AiOutlineSetting, AiOutlineFullscreen } from 'react-icons/ai'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

export default function Playground({ activeTab, setActiveTab }) {
    const [value, setValue] = useState("main")

    const handleChange = (event, newValue) => {
        setActiveTab(newValue)
    }

    return (
        <div className='playgroundnav'>

            {/* Files */}
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={activeTab}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="switch betten main.py & test.py"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: '#e0e0e0', // Indicator color
                                },
                            }}
                        >
                            <Tab
                                className='playground-nav-file'
                                label="main.py"
                                value="main"
                                sx={{
                                    color: '#444',
                                    '&.Mui-selected': {
                                        color: '#e0e0e0'
                                    }
                                }}
                            />
                            <Tab
                                className='playground-nav-file'
                                label="test.py"
                                value="test"
                                sx={{
                                    color: '#444',
                                    '&.Mui-selected': {
                                        color: '#e0e0e0'
                                    }
                                }}
                            />
                        </TabList>
                    </Box>
                </TabContext>
            </Box>

            {/* Butons */}
            <div className='playground-nav-btns'>
                {/* Settings */}
                <div className='playground-nav-btn'>
                    <AiOutlineSetting />
                </div>

                {/* Full Screen */}
                <div className='playground-nav-btn'>
                    <AiOutlineFullscreen />
                </div>
            </div>


            {/* 
    To add...

    QUESTION MARK: how this works instructions

    REFRESH: add a button that starts your code over. Pop up a confurmation modal, 'Are you sure you want to reset your code in the workspace?'

    SETTINGS: saved to local storage
    - reset split bars (moving them should be saved in local storage)
    - wrap code on/off
    - font size
    - tab sizing: 2 spaces vs 4 spaces
    
*/}
        </div>
    )
}