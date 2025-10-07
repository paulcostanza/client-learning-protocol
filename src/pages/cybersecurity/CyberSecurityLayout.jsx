import SectionDrawer from '../../components/SideBarNav'
import { Outlet } from 'react-router-dom'

const sections = [
    { name: 'CyberSecurity 101', path: 'cybersecurity101' },
    { name: 'Terminal Intro', path: 'terminal-intro' },
    { name: 'File System', path: 'file-system' }
]

export default function CyberSecurityLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/cybersecurity'
            />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </main>
    )
}