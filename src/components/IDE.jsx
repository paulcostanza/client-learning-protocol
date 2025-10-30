import { useState, useEffect } from "react"
import Editor from "@monaco-editor/react"
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
} from "react-resizable-panels"

export default function IDE({
    hasHTML = true,
    hasCSS = true,
    HTMLStart = "<h1>Hello nerd!</h1>",
    CSSStart = "body {background: #2d2d2d; color: #ccc;}\na { color: #357abd; }\nimg { width: 300px; }\nfooter { font-size: 0.88em; }\n\n",
    firstTab = "html"
}) {
    const [html, setHtml] = useState(HTMLStart)
    const [css, setCss] = useState(CSSStart)
    const [srcDoc, setSrcDoc] = useState("")
    const [activeCodingTab, setActiveCodingTab] = useState(firstTab)
    const [activeDisplayTab, setActiveDisplayTab] = useState("output")
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            const source = `
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
            </body>
        </html>
      `
            setSrcDoc(source)
        }, 300)
        return () => clearTimeout(timeout)
    }, [html, css, hasHTML, hasCSS])

    const codingTabs = []

    if (hasHTML) codingTabs.push({ id: "html", label: "HTML" })
    if (hasCSS) codingTabs.push({ id: "css", label: "CSS" })

    const displayTabs = [
        { id: "output", label: "Output" },
    ]

    useEffect(() => {
        const availableTabs = codingTabs.map(tab => tab.id)
        if (!availableTabs.includes(firstTab) && availableTabs.length > 0) {
            setActiveCodingTab(availableTabs[0])
        } else if (availableTabs.includes(firstTab)) {
            setActiveCodingTab(firstTab)
        }
    }, [hasHTML, hasCSS, firstTab])

    return (
        <div className="code-example">
            <PanelGroup direction={isMobile ? "vertical" : "horizontal"}>
                <Panel
                    minSize={isMobile ? 30 : 20}
                    defaultSize={isMobile ? 60 : 50}
                    maxSize={isMobile ? 70 : 80}
                >
                    {/* Tabs */}
                    <div className="coding">
                        <div className="">
                            {codingTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveCodingTab(tab.id)}
                                    className={` ${activeCodingTab === tab.id
                                        ? ""    // will be filled when I add/edit tab animations
                                        : ""
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content area */}
                        {activeCodingTab === "html" && (
                            <Editor
                                height="400px"
                                language="html"
                                theme="vs-dark"
                                value={html}
                                onChange={(v) => setHtml(v || "")}
                                options={{
                                    fontSize: 14,
                                    minimap: { enabled: false },
                                    wordWrap: "on",
                                    scrollBeyondLastLine: true,
                                    scrollbar: {
                                        horizontal: 'auto',
                                        vertical: 'auto'
                                    }
                                }}
                            />
                        )}
                        {activeCodingTab === "css" && (
                            <Editor
                                height="400px"
                                language="css"
                                theme="vs-dark"
                                value={css}
                                onChange={(v) => setCss(v || "")}
                                options={{
                                    fontSize: 14,
                                    minimap: { enabled: false },
                                    wordWrap: "on",
                                    scrollBeyondLastLine: true,
                                    scrollbar: {
                                        horizontal: 'auto',
                                        vertical: 'auto'
                                    }
                                }}
                            />
                        )}
                        {/* Will get this done, one day... */}
                        {/* {activeCodingTab === "js" && (
                            <Editor
                                height="400px"
                                language="javascript"
                                theme="vs-dark"
                                value={js}
                                onChange={(v) => setJs(v || "")}
                                options={{ fontSize: 14, minimap: { enabled: false } }}
                            />
                        )} */}
                    </div>
                </Panel>
                <PanelResizeHandle />
                <Panel
                    minSize={isMobile ? 30 : 20}
                    defaultSize={isMobile ? 60 : 50}
                    maxSize={isMobile ? 70 : 80}
                >
                    <div
                        className="display"
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column-reverse' : 'column',
                            height: '100%'
                        }}
                    >
                        <div className="">
                            {displayTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveDisplayTab(tab.id)}
                                    className={` ${activeDisplayTab === tab.id
                                        ? ""
                                        : ""
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        {activeDisplayTab === 'output' && (
                            <iframe
                                srcDoc={srcDoc}
                                title="output"
                                sandbox="allow-scripts"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                            />
                        )}
                    </div>
                </Panel>
            </PanelGroup>
        </div >
    )
}
