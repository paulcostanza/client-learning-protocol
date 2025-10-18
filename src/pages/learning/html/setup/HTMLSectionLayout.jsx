import SectionDrawer from '../../../../components/SideBarNav'
import { Outlet } from 'react-router-dom'
import PrevNextSection from '../../../../components/PrevNextSection'

const sections = [
    { name: 'HTML Fundamentals', path: 'fundamentals' },
]

export default function HTMLSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/html'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/html' />
                </div>
            </main>
        </main>
    )
}