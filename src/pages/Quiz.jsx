import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KnowledgeCheck from '../components/KnowledgeCheck'

export default function Quiz() {
    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">
                    <h1>Testing!</h1>
                    <p>This is the future spot for the quiz page</p>
                    <h3>Thanks for checking us out!</h3>
                </div >
                <KnowledgeCheck />
            </main>

            <Footer />
        </>
    )
}