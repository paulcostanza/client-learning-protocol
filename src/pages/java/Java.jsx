import { useState } from 'react'
import SectionDrawer from '../../components/SideBarNav'

import JavaIntro from './JavaIntro'

const sectionComponents = {
    'Intro to Java': <JavaIntro />
}

export default function Java() {
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
                <div className="container" id="">

                    {sectionComponents[selectedSection]}

                </div>
            </main>
        </>

    )
}