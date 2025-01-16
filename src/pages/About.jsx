import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <NavBar />
            <div className="container" id="space-on-top-of-page">
                <p>Hi, I'm Paul! Creator of CLP.</p>

                <p>Here at CLP, we believe that learning should be for those who only have the desire to learn. It's the 21st
                    century people, we have the internet. Learning shouldn't be put behind paywalls and only available to those
                    with the financial means. Here you will find everything you will need when learning about computer
                    programming. Syntax, how the computer runs, LLMs, crypto, the latest trends and history of programming are
                    available at your fingure tips. All you need is the willingness to put in the time and some patience. And
                    lots of repetition.</p>

                <p>So be sure to sit back, relax, and have fun. Because that's what programming should be all about, having fun
                    and enjoying the process.</p>
            </div>
            <Footer />
        </>
    )
}