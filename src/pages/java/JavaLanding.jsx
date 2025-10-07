import { Link } from 'react-router-dom'

const sections = [
    { name: 'Intro to Java', path: 'intro' },
    { name: 'Java Fundamentals', path: 'fundamentals' },
    { name: 'Methods', path: 'methods' },
    { name: 'Arrays', path: 'arrays' },
    { name: 'HashMaps', path: 'hashmaps' },
]

export default function JavaLanding() {
    return (
        <main>
            <div className="container">
                <h1>Java Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/java/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}