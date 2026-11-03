import { Link } from 'react-router-dom'

const sections = [
    { name: 'Binary Numbers', path: 'binary-numbers' },
]

export default function HardwareLanding() {
    return (
        <main>
            <div className="container">
                <h1>Hardware Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/hardware/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}