import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'introduction' },
    { name: 'C++ Development, Compiler, Linker, & Libraries', path: 'development-compiler-linker-libraries' },
    { name: 'C++ Fundamentals', path: 'fundamentals' },
    { name: 'Build Your First Project', path: 'build-your-first-project' },
    { name: 'Compiler Build Configurations', path: 'compiler-build-configurations' },
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