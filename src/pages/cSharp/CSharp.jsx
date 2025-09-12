import { useState } from 'react'
import Introduction from './Introduction'
import CSharpBasics from './CSharpBasics'
import ControlFlow from './ControlFlow'
import MethodsAndFunctions from './MethodsAndFunctions'
import ObjectOrientedProgramming from './ObjectOrientedProgramming'
import ExceptionHandlings from './ExceptionHandling'
import SectionDrawer from '../../components/SideBarNav'

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
            </main >
        </>
    )
}