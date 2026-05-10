import { Link } from 'react-router-dom'

const sections = [
    { name: 'Intro', path: 'intro' },
    { name: 'Storage', path: 'storage' },
]

export default function DockerLanding() {
    return (
        <main>
            <div className="container">
                <h1>Docker Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/docker/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}