import { Link } from 'react-router-dom'

const sections = [
    { name: 'How Computers Work', path: 'how-computers-work' },
    { name: 'Operating Systems & Software', path: 'operating-systems-and-software' },
    { name: 'How Computers Run Software', path: 'how-computers-run-software' },
    { name: 'Programming Languages', path: 'programming-languages' },
]

export default function IntroToCompLanding() {
    return (
        <main>
            <div className="container">
                <h1>Introduction to Computers Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/intro-to-comp/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}