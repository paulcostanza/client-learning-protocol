import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'HTML Fundamentals', path: 'fundamentals' },
    { name: 'Visual Content & Media', path: 'visual-content-and-media' },
    { name: 'Navigation & Linking', path: 'navigation-and-linking' },
    { name: 'Document Architecture', path: 'document-architecture' },
    { name: 'Organization & Structure', path: 'organization-and-structure' },
    { name: 'Semantic HTML', path: 'semantic-html' },
    { name: 'Forms', path: 'forms' },
    { name: 'Tables', path: 'tables' },
    { name: 'Not Your Everyday Elements', path: 'not-your-everyday-elements' },
    { name: 'Intro into Web Development', path: 'intro-into-web-development' },
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