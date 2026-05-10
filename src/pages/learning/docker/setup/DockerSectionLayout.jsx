import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Intro', path: 'intro' },
    { name: 'Storage', path: 'storage' },
]

export default function DockerLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/docker'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/docker' />
                </div>
            </main>
        </main>
    )
}