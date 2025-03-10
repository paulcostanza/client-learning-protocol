import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Section01 from "./react/Section01"
import IntroToReact from "./react/Section01"

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