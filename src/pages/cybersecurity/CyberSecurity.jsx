import { useState } from 'react'
import SectionDrawer from '../../components/SideBarNav'

import CyberSecurity101 from './CyberSecurity101'
import TerminalIntro from './TerminalIntro'
import FileSystem from './FileSystem'

const sectionComponents = {
    'CyberSecurity 101': <CyberSecurity101 />,
    'Terminal Intro': <TerminalIntro />,
    'File System': <FileSystem />
}

export default function CyberSecurity() {
    const menuItems = Object.keys(sectionComponents)
    const [selectedSection, setSelectedSection] = useState(menuItems[0])

    return (
        <>
            <SectionDrawer
                menuItems={menuItems}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
            />
            <main>
                <div className="container">
                    {sectionComponents[selectedSection]}
                </div>
            </main>
        </>
    )
}