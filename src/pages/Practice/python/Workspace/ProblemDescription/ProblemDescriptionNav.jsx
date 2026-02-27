import { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

export default function ProblemDescriptionNav() {
    const [value, setValue] = useState("description")

    const handleChange = (event, newValue) => {
        setActiveTab(newValue)
    }
    return (
        <div className='problem-description-nav'>
            {/* Tabs */}

            {/* <div className='problem-description-header'>
                <button className='problem-description-header-btn'>Description</button>
                <button className='problem-description-header-btn'>Study Guide</button>
                <button className='problem-description-header-btn'>Comments</button>
                <button className='problem-description-header-btn'>Playlist</button>
            </div> */}

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext> {/* removed value={activeTab} from here, look to PlaygroundNav.jsx */}
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
                                label="Description"
                                value="description"
                                sx={{
                                    color: '#444',
                                    '&.Mui-selected': {
                                        color: '#e0e0e0'
                                    }
                                }}
                            />
                            <Tab
                                className='playground-nav-file'
                                label="study guide"
                                value="study guide"
                                sx={{
                                    color: '#444',
                                    '&.Mui-selected': {
                                        color: '#e0e0e0'
                                    }
                                }}
                            />
                            <Tab
                                className='playground-nav-file'
                                label="playlist"
                                value="playlist"
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

        </div>
    )
}