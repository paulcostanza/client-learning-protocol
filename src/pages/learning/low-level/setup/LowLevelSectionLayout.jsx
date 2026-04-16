import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Variable Size', path: 'variable-size' },
    { name: 'Binary Exploitation', path: 'binary-exploitation' },
]

export default function LowLevelSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/lowlevel'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/lowlevel' />
                </div>
            </main>
        </main>
    )
}