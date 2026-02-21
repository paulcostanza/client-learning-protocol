import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Functions', path: 'functions' },
    { name: 'Scope', path: 'scope' },
    { name: 'Testing & Debugging', path: 'testing-and-debugging' },
    { name: 'Commputing', path: 'computing' },
    { name: 'Lists', path: 'lists' },
    { name: 'Dictionaries', path: 'dictionaries' },
]

export default function PythonSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/python'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/python' />
                </div>
            </main>
        </main>
    )
}