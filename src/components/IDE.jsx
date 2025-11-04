import { useState, useEffect, useRef } from "react"
import Editor from "@monaco-editor/react"
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
} from "react-resizable-panels"

export default function IDE({
    hasHTML = true,
    hasCSS = true,
    hasJS = false,
    HTMLStart = "<h1>Hello nerd!</h1>",
    CSSStart = "body {background: #2d2d2d; color: #ccc;}\na { color: #357abd; }\nimg { width: 300px; }\nfooter { font-size: 0.88em; }\n\n",
    JSStart = `const btn = document.querySelector("button")
btn.addEventListener("click", function() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});`,
    firstTab = "html"
}) {
    const [html, setHtml] = useState(HTMLStart)
    const [css, setCss] = useState(CSSStart)
    const [js, setJs] = useState(JSStart)
    const [srcDoc, setSrcDoc] = useState("")
    const [activeCodingTab, setActiveCodingTab] = useState(firstTab)
    const [activeDisplayTab, setActiveDisplayTab] = useState("output")
    const [isMobile, setIsMobile] = useState(false)
    // const [consoleLogs, setConsoleLogs] = useState([])
    const iframeRef = useRef(null)

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
            // setConsoleLogs([])

            const source = `
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>
                    // Just execute the JavaScript without console capture
                    try {
                        ${hasJS ? js : ''}
                    } catch (error) {
                        console.error('JavaScript Error:', error.message);
                    }
                </script>
            </body>
        </html>
      `
            // setConsoleLogs([])
            setSrcDoc(source)
        }, 300)
        return () => clearTimeout(timeout)
    }, [html, css, js, hasHTML, hasCSS, hasJS])

    // for console
    // useEffect(() => {
    //     const handleMessage = (event) => {
    //         if (event.data &&
    //             typeof event.data === 'object' &&
    //             event.data.type === 'console' &&
    //             Array.isArray(event.data.data)) {

    //             console.log('Valid console message received: ', event.data)
    //             const timestamp = new Date().toLocaleTimeString()
    //             setConsoleLogs(prev => [...prev, {
    //                 id: Date.now() + Math.random(),
    //                 method: event.data.method,
    //                 data: event.data.data,
    //                 timestamp
    //             }])
    //         }
    //     }

    //     window.addEventListener('message', handleMessage)
    //     return () => window.removeEventListener('message', handleMessage)
    // }, [])

    const codingTabs = []

    if (hasHTML) codingTabs.push({ id: "html", label: "HTML" })
    if (hasCSS) codingTabs.push({ id: "css", label: "CSS" })
    if (hasJS) codingTabs.push({ id: "js", label: "JavaScript" })

    const displayTabs = [
        ...(hasHTML ? [{ id: "output", label: "Output" }] : []),
        // ...(hasJS ? [{ id: "console", label: "Console" }] : [])
    ]

    useEffect(() => {
        const availableTabs = codingTabs.map(tab => tab.id)
        if (!availableTabs.includes(firstTab) && availableTabs.length > 0) {
            setActiveCodingTab(availableTabs[0])
        } else if (availableTabs.includes(firstTab)) {
            setActiveCodingTab(firstTab)
        }
    }, [hasHTML, hasCSS, hasJS, firstTab])

    useEffect(() => {
        const availableDisplayTabs = displayTabs.map(tab => tab.id)
        if (!availableDisplayTabs.includes(activeDisplayTab) && availableDisplayTabs.length > 0) {
            setActiveDisplayTab(availableDisplayTabs[0])
        }
    }, [hasHTML, hasJS])

    const clearConsole = () => setConsoleLogs([])

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
                        {activeCodingTab === "js" && (
                            <Editor
                                height="400px"
                                language="javascript"
                                theme="vs-dark"
                                value={js}
                                onChange={(v) => setJs(v || "")}
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
                                ref={iframeRef}
                                srcDoc={srcDoc}
                                title="output"
                                sandbox="allow-scripts"
                                width="100%"
                                height="100%"
                            />
                        )}
                        {/* {activeDisplayTab === 'console' && (
                            <div style={{
                                backgroundColor: '#1e1e1e',
                                color: '#d4d4d4',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                padding: '10px',
                                height: '100%',
                                overflow: 'auto',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '10px',
                                    borderBottom: '1px solid #333',
                                    paddingBottom: '5px'
                                }}>
                                    <span>Console</span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button
                                            onClick={runCode}
                                            style={{
                                                background: '#0078d4',
                                                color: '#fff',
                                                border: 'none',
                                                padding: '4px 8px',
                                                cursor: 'pointer',
                                                fontSize: '12px',
                                                borderRadius: '2px'
                                            }}
                                        >
                                            Run
                                        </button>
                                        <button
                                            onClick={clearConsole}
                                            style={{
                                                background: '#333',
                                                color: '#d4d4d4',
                                                border: 'none',
                                                padding: '4px 8px',
                                                cursor: 'pointer',
                                                fontSize: '12px',
                                                borderRadius: '2px'
                                            }}
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>
                                <div style={{ flex: 1, overflow: 'auto' }}>
                                    {consoleLogs.map((log) => (
                                        <div key={log.id} style={{
                                            marginBottom: '5px',
                                            color: log.method === 'error' ? '#f85149' :
                                                log.method === 'warn' ? '#f0ad4e' : '#d4d4d4'
                                        }}>
                                            <span style={{ color: '#666', fontSize: '12px' }}>
                                                {log.timestamp}
                                            </span>
                                            {' '}
                                            <span style={{ fontWeight: 'bold' }}>
                                                {log.method === 'error' ? '❌' :
                                                    log.method === 'warn' ? '⚠️' : 'ℹ️'}
                                            </span>
                                            {' '}
                                            {log.data.join(' ')}
                                        </div>
                                    ))}
                                    {consoleLogs.length === 0 && (
                                        <div style={{ color: '#666', fontStyle: 'italic' }}>
                                            Console output will appear here...
                                        </div>
                                    )}
                                </div>
                            </div>
                        )} */}
                    </div>
                </Panel>
            </PanelGroup>
        </div >
    )
}
