import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'intro' },
    { name: 'C# Basics', path: 'basics' },
    { name: 'Control Flow', path: 'control-flow' },
    { name: 'Methods & Functions', path: 'methods-and-functions' },
    { name: 'Object Oriented Programming', path: 'oop' },
    { name: 'Exception Handling', path: 'exception-handling' },
    { name: 'APIs: Intro', path: 'apis-intro' },
    { name: 'APIs: Controller Class', path: 'apis-controller-class' },
]

export default function CSharpLanding() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/csharp'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/csharp' />
                </div>
            </main>
        </main>
    )
}