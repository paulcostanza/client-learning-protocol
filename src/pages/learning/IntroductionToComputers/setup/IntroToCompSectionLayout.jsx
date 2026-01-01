import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'How Computers Work', path: 'how-computers-work' },
    { name: 'Operating Systems & Software', path: 'operating-systems-and-software' },
    { name: 'How Computers Run Software', path: 'how-computers-run-software' },
    { name: 'Programming Languages', path: 'programming-languages' },
    { name: 'IDE', path: 'ide' },
]

export default function IntroToCompSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/intro-to-comp'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/intro-to-comp' />
                </div>
            </main>
        </main>
    )
}