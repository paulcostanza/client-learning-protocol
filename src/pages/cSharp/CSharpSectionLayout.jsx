import SectionDrawer from '../../components/SideBarNav'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'intro' },
    { name: 'C# Basics', path: 'basics' },
    { name: 'Control Flow', path: 'control-flow' },
    { name: 'Methods & Functions', path: 'methods-and-functions' },
    { name: 'Object Oriented Programming', path: 'oop' },
    { name: 'Exception Handling', path: 'exception-handling' },
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
                </div>
            </main>
        </main>
    )
}