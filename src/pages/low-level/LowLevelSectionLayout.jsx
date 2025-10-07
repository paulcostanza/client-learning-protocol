import SectionDrawer from '../../components/SideBarNav'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Variable Size', path: 'variable-size' },
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
                </div>
            </main>
        </main>
    )
}