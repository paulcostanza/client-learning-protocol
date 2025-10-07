import { Link } from 'react-router-dom'

const sections = [
    { name: 'CyberSecurity 101', path: 'cybersecurity101' },
    { name: 'Terminal Intro', path: 'terminal-intro' },
    { name: 'File System', path: 'file-system' }
]

export default function CyberSecurityLanding() {
    return (
        <main>
            <div className="container">
                <h1>CyberSecurity Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/cybersecurity/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}