import { Link } from 'react-router-dom'

const sections = [
    { name: 'Variable Size', path: 'variable-size' },
]

export default function LowLevelLanding() {
    return (
        <main>
            <div className="container">
                <h1>Low Level Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/lowlevel/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}