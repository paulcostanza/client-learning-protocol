import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function React() {
    return (
        <>
            <NavBar />

            <h1 id="learn-react---section-1">Learn React - Section 1</h1>
            <h2 id="static-pages">Static Pages</h2>
            <p>React takes javascript and adds it to the html for us.</p>
            <ol>
                <li>create a root</li>
                <li>render some markup to the root</li>
            </ol>
            <p>setting up react:</p>

            <Footer />
        </>
    )
}