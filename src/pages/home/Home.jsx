import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText);

export default function Home() {
    const textRef = useRef(null);

    useEffect(() => {
        const split = new SplitText(textRef.current, {
            type: "chars,words,lines",
            wordsClass: "word"
        });

        gsap.from(split.chars, {
            y: 100,
            autoAlpha: 0,
            stagger: {
                amount: 1.3,
                from: "random"
            }
        });

        return () => split.revert();
    }, []);

    return (
        <main>
            <div className="container" id="space-on-top-of-page">

                <h1 ref={textRef} >Client Learning Protocol</h1>

                <p style={{ textAlign: 'center' }}>To get started, choose a learning path from above under <strong>LEARNING</strong>.</p>

                <p style={{ textAlign: 'center' }}>To jump right into coding, click <strong>PRACTICE</strong>.</p>
            </div>
        </main>
    );
}