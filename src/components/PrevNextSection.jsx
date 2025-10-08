import { Link, useLocation } from 'react-router-dom'

export default function PrevNextSection({ sections, basePath = '' }) {
    const location = useLocation()
    const currentPath = location.pathname.replace(`${basePath}/`, '')
    const idx = sections.findIndex(s => s.path === currentPath)

    const prev = idx > 0 ? sections[idx - 1] : null
    const next = idx < sections.length - 1 ? sections[idx + 1] : null

    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2em" }}>
            {prev ? (
                <Link to={`${basePath}/${prev.path}`}>{`← ${prev.name}`}</Link>
            ) : <span />}
            {next ? (
                <Link to={`${basePath}/${next.path}`}>{`${next.name} →`}</Link>
            ) : <span />}
        </div>
    );
}