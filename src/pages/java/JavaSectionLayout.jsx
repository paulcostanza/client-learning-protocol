import SectionDrawer from '../../components/SideBarNav'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Intro to Java', path: 'intro' },
    { name: 'Java Fundamentals', path: 'fundamentals' },
    { name: 'Methods', path: 'methods' },
    { name: 'Arrays', path: 'arrays' },
    { name: 'HashMaps', path: 'hashmaps' },
]

export default function JavaSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/java'
            />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </main>
    )
}