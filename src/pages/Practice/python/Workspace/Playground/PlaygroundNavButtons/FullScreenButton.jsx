import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { useState, useEffect } from "react"

export default function FullScreenButton() {
    const [isFullScreen, setIsFullScreen] = useState(false)
    const handleFullScreen = () => {
        if (isFullScreen) {
            document.exitFullscreen()
        } else {
            document.documentElement.requestFullscreen()
        }
        setIsFullScreen(!isFullScreen)
    }

    useEffect(() => {
        const exitHandler = e => {
            if (!document.fullscreenElement) {
                setIsFullScreen(false)
                return
            }
            setIsFullScreen(true)
        }

        if (document.addEventListener) {
            document.addEventListener("fullscreenchange", exitHandler)
            document.addEventListener("webkitfullscreenchange", exitHandler)
            document.addEventListener("mozfullscreenchange", exitHandler)
            document.addEventListener("MSFullscreenChange", exitHandler)
        }
    }, [isFullScreen])

    return (
        <div onClick={handleFullScreen}>
            {isFullScreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
        </div>
    )

}