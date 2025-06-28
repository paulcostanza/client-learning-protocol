import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KnowledgeCheck from '../components/KnowledgeCheck'
import CLP from '../assets/landingPage/clp_animated.gif'

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">

                    <img src={CLP} style={{ width: '100%' }} />

                    <h1>Hello!</h1>
                    <p style={{ textAlign: 'center' }}>Work in progress, working at a slow, leisurely pace, tehe.</p>
                </div>
            </main>
            <Footer />
        </>
    )
}