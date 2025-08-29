import { useState } from 'react'
import SectionDrawer from '../../components/SideBarNav'

import JavaIntro from './JavaIntro'
import JavaFundamentals from './JavaFundamentals'

const sectionComponents = {
    'Intro to Java': <JavaIntro />,
    'Java Fundamentals': <JavaFundamentals />
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