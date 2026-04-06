import { Link } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'introduction' },
]

export default function WebApiLanding() {
    return (
        <main>
            <div className="container">
                <h1>API Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/web-api/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}