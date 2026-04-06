import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'introduction' },
]

export default function WebApiSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/web-api'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/web-api' />
                </div>
            </main>
        </main>
    )
}