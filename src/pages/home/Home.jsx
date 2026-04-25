import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText);

export default function Home() {
    const textRef = useRef(null);
    const canvasRef = useRef(null);

    // falling Title
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

    // falling Background
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana =
            "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
        const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums = "0123456789";

        const alphabet = katakana + latin + nums;

        const fontSize = 20;
        const columns = Math.floor(canvas.width / fontSize) + 1;

        const rainDrops = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            context.fillStyle = "rgba(17, 24, 18, 0.05)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "#00ffd0";
            context.font = fontSize + "px monospace";

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(
                    Math.floor(Math.random() * alphabet.length)
                );

                context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (
                    rainDrops[i] * fontSize > canvas.height &&
                    Math.random() > 0.975
                ) {
                    rainDrops[i] = 0;
                }

                rainDrops[i]++;
            }
        };

        const interval = setInterval(draw, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <canvas id="matrix-canvas" ref={canvasRef} />
            <div className="container-hide" id="space-on-top-of-page">
                <h1 className='matrix-element' ref={textRef} >Client Learning Protocol</h1>

                <div className='matrix-items'>
                    <p className='matrix-element'>To get started, choose a learning path from <strong>LEARNING</strong>.</p>

                    <Link to="/quiz" style={{ textDecoration: 'none' }}>
                        <p className='matrix-element'>To see if your skills are up to par, select <strong>QUIZ</strong>.</p>
                    </Link>

                    <Link to="/practice/python" style={{ textDecoration: 'none' }}>
                        <p className='matrix-element matrix-show-on-big-screen-only'>To jump right into coding, click <strong>PRACTICE</strong>.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}