import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Clicking next or prev at bottom of a page does not automically load page at top
// hence the existence of this little guy
export default function ScrollToTop() {
    const { pathname } = useLocation()
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname])
    return null
}