import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Basics', path: 'basics' },
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