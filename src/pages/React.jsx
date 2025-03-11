import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import IntroToReact from "./react/IntroToReact"

export default function React() {
    return (
        <>
            <NavBar />

            <main>
                <div className="container" id="space-on-top-of-page">
                    <IntroToReact />

                </div>

            </main>


            <Footer />
        </>
    )
}