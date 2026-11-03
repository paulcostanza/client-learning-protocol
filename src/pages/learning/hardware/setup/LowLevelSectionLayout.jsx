import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Binary Numbers', path: 'binary-numbers' },
]

export default function HardwareSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/hardware'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/hardware' />
                </div>
            </main>
        </main>
    )
}