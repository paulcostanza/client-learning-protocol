import { Link } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'intro-to-react' },
    { name: 'Hooks', path: 'hooks' },
]

export default function ReactLanding() {
    return (
        <main>
            <div className="container">
                <h1>React Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/react/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}