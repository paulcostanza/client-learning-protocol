import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KnowledgeCheck from '../components/KnowledgeCheck'

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">

                    <h1>Hello!</h1>
                    <p>Work in progress, working at a slow, leisurely pace, tehe.</p>
                </div>
            </main>
            <Footer />
        </>
    )
}