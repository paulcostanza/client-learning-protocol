import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function NoPage() {
    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">
                    <h2><strong>ERROR 404:</strong> Not Found</h2>
                </div>
            </main>
            <Footer />
        </>
    )
}