import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'introduction' },
    { name: 'Development: Compiler, Linker, & Libraries', path: 'development-compiler-linker-libraries' },
    { name: 'Development: Examples', path: 'development-examples' },
    { name: 'C++ Fundamentals', path: 'fundamentals' },
    { name: 'Build Your First Project', path: 'build-your-first-project' },
    { name: 'Compiler Build Configurations', path: 'compiler-build-configurations' },
    { name: 'Comments', path: 'comments' },
    { name: 'Intro to iostream', path: 'intro-to-iostream' },
    { name: 'Strings', path: 'strings' },
    { name: 'Stack vs Heap', path: 'stack-vs-heap' },
    { name: 'Storage', path: 'storage' },
    { name: 'Exception Safety', path: 'exception-safety' },
]

export default function CPlusPlusSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/cpp'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/cpp' />
                </div>
            </main>
        </main>
    )
}