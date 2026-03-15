import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Basics', path: 'basics' },
]

export default function SqlLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/sql'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/sql' />
                </div>
            </main>
        </main>
    )
}