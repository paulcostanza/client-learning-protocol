import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

export default function ProblemDescriptionNav({ activeTab, setActiveTab }) {

    const handleChange = (event, newValue) => {
        setActiveTab(newValue)
    }

    return (
        <div className='problem-description-nav'>

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={activeTab}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="switch between description, study guide, playlist, & solution"
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
                            <Tab
                                className='playground-nav-file'
                                label="solution"
                                value="solution"
                                sx={{
                                    color: '#444',
                                    '&.Mui-selected': {
                                        color: '#e0e0e0'
                                    }
                                }}
                            />
                            {/* Add comments tab */}
                        </TabList>
                    </Box>
                </TabContext>
            </Box>

        </div>
    )
}