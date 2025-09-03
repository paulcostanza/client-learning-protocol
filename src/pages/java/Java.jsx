import { useState } from 'react'
import SectionDrawer from '../../components/SideBarNav'

import JavaIntro from './JavaIntro'
import JavaFundamentals from './JavaFundamentals'
import Methods from './Methods'
import CollectionsAndGenerics from './CollectionsAndGenerics'

const sectionComponents = {
    'Intro to Java': <JavaIntro />,
    'Java Fundamentals': <JavaFundamentals />,
    'Methods': <Methods />,
    'Collections & Generics': <CollectionsAndGenerics />
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