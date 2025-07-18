import Me from '/src/assets/about/me.png'

export default function About() {
    return (
        <>
            <main>
                <div className="container about-page" id="space-on-top-of-page">

                    <h3>Welcome to Client Learning Protocol</h3>

                    <div >
                        <p>Here at CLP, we believe that learning should be for everyone that has the desire to learn. It's the 21st
                            century people, we have the internet. Learning shouldn't be put behind paywalls and only available to those
                            with the financial means. </p>

                        <p>As you can tell, the site is currently under construction, and I am trying to add as much as I can, as quickly as I can. Here you will (eventually) find everything you will need when learning about computer
                            programming. Syntax, how the computer runs, LLMs, crypto, networking, the latest trends and history of programming are (will be)
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

                            <p>I originally wrote my notes on my laptop, all in <code>markdown</code> format. The sources range from class, books, youtube videos, documentation, udemy courses, memes, socal media post, work, and anything that made me think "that's acutally super important, let me write that down..."</p>

                            <p>Being a visual learner myself, I try to fill in the text with pics and memes to better solidify my understand of the topic at hand. I am trying to figure out Adobe Illustrator, so bear with me when it comes to the quality of pics. Any pics that are not of high quality are being worked on and updated. </p>

                        </div>

                        <div className="about-right">
                            <img id="me" src={Me} alt="pic_of_me" />
                        </div>

                        {/* My Favorite Sources */}
                        {/* Here are a few of my personal favorite sources, where I got not only the most information, but that was formated in a way that made sense to me. Sometimes a person's delivery or tone just doesn't work with me. I find the ways people explain or teach to be really important in how I can understand. -not sure I am saything that right-   */}

                        {/* Contact */}
                    </div>





                </div>
            </main>
        </>
    )
}