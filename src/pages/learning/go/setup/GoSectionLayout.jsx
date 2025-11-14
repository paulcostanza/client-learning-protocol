import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'introduction' },
    { name: 'Fundamentals', path: 'fundamentals' },
    { name: 'Conditionals', path: 'conditionals' },
]

export default function GoSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/go'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/go' />
                </div>
            </main>
        </main>
    )
}