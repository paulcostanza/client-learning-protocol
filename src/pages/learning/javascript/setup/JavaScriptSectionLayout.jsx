import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Intro', path: 'intro' },
    { name: 'Basics', path: 'basics' },
    { name: 'Strings', path: 'strings' },
    { name: 'String Methods', path: 'string-methods' },
    { name: 'Numbers', path: 'numbers' },
    { name: 'Advance Operators', path: 'advance-operators' },
    { name: 'Conditionals: If statements', path: 'conditionals-if-statements' },
    { name: 'Array Methods', path: 'array-methods' },
    { name: 'Weird JS', path: 'weird-js' },
]

export default function JavaScriptLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/javascript'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/javascript' />
                </div>
            </main>
        </main>
    )
}