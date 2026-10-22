import SectionDrawer from '../../../../components/SideBarNav'
import { Outlet } from 'react-router-dom'
import PrevNextSection from '../../../../components/PrevNextSection'

const sections = [
    { name: 'Intro to Java', path: 'intro' },
    { name: 'Java Fundamentals', path: 'fundamentals' },
    { name: 'Methods', path: 'methods' },
    { name: 'Arrays', path: 'arrays' },
    { name: 'HashMaps', path: 'hashmaps' },
    { name: 'HTTP Server Section', path: 'http-server' },
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
                    <PrevNextSection sections={sections} basePath='/java' />
                </div>
            </main>
        </main>
    )
}