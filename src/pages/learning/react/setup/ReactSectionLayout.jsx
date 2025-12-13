import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Introduction to React', path: 'intro-to-react' },
    { name: 'Hooks', path: 'hooks' },
]

export default function ReactSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/react'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/react' />
                </div>
            </main>
        </main>
    )
}