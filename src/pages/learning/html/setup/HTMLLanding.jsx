import { Link } from 'react-router-dom'

const sections = [
    { name: 'Fundamentals', path: 'fundamentals' },
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

export default function HTMLLanding() {
    return (
        <main>
            <div className="container">
                <h1>HTML Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/html/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}