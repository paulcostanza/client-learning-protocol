import CLP from '../../assets/landingPage/clp_animated.gif'

export default function Home() {
    return (
        <>
            <main>
                <div className="container" id="space-on-top-of-page">

                    <img src={CLP} style={{ width: '100%' }} />

                    <h1>Hello!</h1>
                    <p style={{ textAlign: 'center' }}>Work in progress, working at a slow, leisurely pace, tehe.</p>
                </div>
            </main>
        </>
    )
}