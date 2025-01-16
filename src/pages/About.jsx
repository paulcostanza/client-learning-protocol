import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import Me from '../assets/about/me/png'

export default function About() {
    return (
        <>
            <NavBar />
            <div className="container about-page" id="space-on-top-of-page">

                <h3>Welcome to Client Learning Protocol</h3>

                <div >
                    <p>Here at CLP, we believe that learning should be for everyone that has the desire to learn. It's the 21st
                        century people, we have the internet. Learning shouldn't be put behind paywalls and only available to those
                        with the financial means. </p>

                    <p>As you can tell, the site is currently under construction, and I am trying to add as much as I can, as quickly as I can. Here you will (eventually) find everything you will need when learning about computer
                        programming. Syntax, how the computer runs, LLMs, crypto, the latest trends and history of programming are (will be)
                        available at your finger tips. All you need is the willingness to put in the time and some patience. And
                        lots of repetition.</p>

                    <p>So be sure to sit back, relax, and have fun. Because that's what programming should be all about, having fun
                        and enjoying the process.</p>
                </div>

                <h3>About me...</h3>

                <div className="about-page-me">

                    <div className="about-left">
                        <p>Hi, I'm Paul! Creator of CLP.</p>

                        <p>I am currently a senior over at Rhode Island College working towards my Bachlors of Science in Computer Science. This website became a hobby of mine, out of a necessity of trying to organize all of my notes. I want to put everthing out there in an understandable, readable, & enjoyable format for not only myself, but for anyone that could benefit from it. </p>

                        <p>I originally wrote my notes on my destop, all in <code>markdown</code> format. The information ranges from class, books, youtube videos, documentation, udemy courses, memes, socal media post, work, and anything that made me think "that's acutally super important, let me write that down..."</p>

                        <p>Being a visual learner myself, I try to fill in the text with pics and memes to better solidify my understand of the topic at hand. I am trying to figure out Adobe Illustrator, so bear with me when it comes to the quality of pics. Any pics that do not have high quality are being worked on and updated. </p>

                    </div>

                    <div className="about-right">
                        <img id="me" src="src/assets/about/me.png" alt="pic_of_me" />
                    </div>
                </div>





            </div>
            <Footer />
        </>
    )
}