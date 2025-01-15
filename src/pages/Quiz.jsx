import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KnowledgeCheck from '../components/KnowledgeCheck'

export default function QuizPage() {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: "69px" }}>
                <h1>Testing!</h1>
                <p>This is the future spot for the quiz page</p>
                <h3>Thanks for checking us out!</h3>
            </div >
            <KnowledgeCheck />
            <Footer />
        </>
    )
}