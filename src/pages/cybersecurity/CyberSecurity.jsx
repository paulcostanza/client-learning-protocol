import { useState } from 'react'
import SectionDrawer from '../../components/SideBarNav'
import CyberSecurity101 from './CyberSecurity101'

const sectionComponents = {
    'CyberSecurity 101': <CyberSecurity101 />
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