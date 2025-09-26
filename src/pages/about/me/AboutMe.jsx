import Me from '../../../assets/about/me.png'
import FavoriteSources from './FavoriteSources'
import Contact from './Contact'

export default function AboutMe() {
    return (
        <>
            <main>
                <div className="container about-page" id="space-on-top-of-page">
                    <h3>About me...</h3>

                    <div className="about-page-me">
                        <div className="about-left">
                            <p>Hi, I'm Paul! Creator of CLP.</p>

                            <p>I am currently an entry level software engineer at <a href="https://www.squadlocker.com/" target="_blank">SquadLocker</a> and a recent graduate of Rhode Island College with a Bachelor of Science in Computer Science. This website became a hobby of mine, out of a necessity of trying to organize all of my notes. I want to put everything out there in an understandable, readable, & enjoyable format for not only myself, but for anyone that could benefit from it.</p>

                            <p>I originally wrote my notes on my laptop, all in <code>markdown</code> format. The sources range from class, books, youtube videos, documentation, udemy courses, memes, social media posts, work, and anything that made me think "that's actually super important, let me write that down..."</p>

                            <p>Being a visual learner myself, I try to fill in the text with pics and memes to better solidify my understanding of the topic at hand. I am trying to figure out Adobe Illustrator, so bear with me when it comes to the quality of pics. Any pics that are not of high quality where most likely AI generated or created in MicroSoft Paint. </p>

                        </div>

                        <div className="about-right">
                            <img id="me" src={Me} alt="pic_of_me" />
                        </div>


                    </div>
                    <FavoriteSources />
                    <Contact />
                </div>
            </main>
        </>
    )
}