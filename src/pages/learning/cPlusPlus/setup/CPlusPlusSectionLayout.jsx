import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'C++ Fundamentals', path: 'fundamentals' },
]

export default function CPlusPlusSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/cpp'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/cpp' />
                </div>
            </main>
        </main>
    )
}