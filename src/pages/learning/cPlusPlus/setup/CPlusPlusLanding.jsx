import { Link } from 'react-router-dom'

const sections = [
    { name: 'Fundamentals', path: 'fundamentals' },
]

export default function CPlusPlusLanding() {
    return (
        <main>
            <div className="container">
                <h1>C++ Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/cpp/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}