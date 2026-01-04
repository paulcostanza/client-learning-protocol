import { Link } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'introduction' },
    { name: 'C++ Development, Compiler, Linker, & Libraries', path: 'development-compiler-linker-libraries' },
    { name: 'Fundamentals', path: 'fundamentals' },
    { name: 'Build Your First Project', path: 'build-your-first-project' },
    { name: 'Compiler Build Configurations', path: 'compiler-build-configurations' },
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