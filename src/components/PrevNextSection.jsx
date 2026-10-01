import { Link, useLocation } from 'react-router-dom'

export default function PrevNextSection({ sections, basePath = '' }) {
    const location = useLocation()
    const currentPath = location.pathname.replace(`${basePath}/`, '')
    const idx = sections.findIndex(s => s.path === currentPath)

    const prev = idx > 0 ? sections[idx - 1] : null
    const next = idx < sections.length - 1 ? sections[idx + 1] : null

    const leftArrow = '←'
    const rightArrow = '→'

    return (
        <div className="prev-next-section">
            {prev ? (
                <Link to={`${basePath}/${prev.path}`}>
                    <span className='prev-next-section-left-arrow'>{leftArrow}</span> <span>{prev.name}</span>
                </Link>
            ) : <span />}
            {next ? (
                <Link to={`${basePath}/${next.path}`}>
                    {next.name} <span className='prev-next-section-right-arrow'>{rightArrow}</span>
                </Link>
            ) : <span />}
        </div>
    );
}