export default function CyberSecurity101() {
    return (
        <div>

            <h1>CyberSecurity 101</h1>

            <h2>Our approach to learning cyber defenses</h2>
            <p>
                <em>The adversarial mindset</em> is best for learning cybersecurity. In order to learn how to spot and avoid web vulnerabilities, it is best to know how to <em>carry out</em> such attacks. The <em>traditional lesson</em> requires abstraction, generalization, and so on... which can only cover <em>part</em> of the concepts needed.
            </p>
            <p>
                The adversarial mindset also covers edge cases, which is where many issues can occur. Traditionally, edge-cases are hard to explore from a <em>defensive</em> standpoint.
            </p>
            <p>
                Taking on the role of an attacker by carrying out practical attacks will grow your knowledge by gaining familiarity with such edge cases.
            </p>

            <h2>What is Cybersecurity?</h2>
            <p>
                The <strong>CIA</strong> triad framework is a great starting point for how we should start to think about cybersecurity:
            </p>
            <ul>
                <li><strong>confidentiality</strong> of non-public resources</li>
                <li><strong>integrity</strong> of data</li>
                <li><strong>availability</strong> for use</li>
            </ul>

            <h2>Proving (Absences of) Cybersecurity</h2>
            <p>
                <em>How can we show that Technology XYZ is secure?</em>
            </p>

            <div className="focus-text">
                <p>XYZ is secure, then XYZ has no security flaws</p>
            </div>

            <p>Try thinking about it for a second, how easy is it to prove something is secure? It's actually kind of hard! But proving something that is not secure, an <em>insecurity</em> is rather straightforward. There is a flaw and watch me exploit it!</p>

            <div className="focus-text">
                <p>XYZ has this specific vulnerability, then XYZ is insecure</p>
            </div>

            <blockquote>
                <em>You can't argue with a root shell.</em><br />
                - Felix <em>FX</em> Lindner
            </blockquote>

            <h2>Proving (In)Security</h2>
            <p>
                To <em>prove</em> that something is not secure, we simply find (and demonstrate) a vulnerability. Remember the <strong>CIA</strong>? When hacking, our job is to prove that it does <em>not</em> hold, and to break the security model.
            </p>
            <strong>Which methods and how to do this?</strong>
            <p>
                Through different <em>vulnerabilities</em> and <em>hacking</em> techniques. By applying the right combinations of techniques and finding vulnerabilities, we can expose the failure of the Security Model!
            </p>

            <p>Here is the tug of war, attack/defense asymmetry that is always being pulled on from both directions:</p>
            <ol>
                <li>a chain is only as strong as its weakest link</li>
                <li>to win, the defender has to block every attack</li>
                <li>to win, the attacker has to succeed just once</li>
            </ol>
            <p>Even good defenses can (will) fail!</p>

            <h2>Cybersecurity Ethics</h2>
            <h5><em>Hacking Groundrules</em></h5>

            <p>
                Just because you are learning offensive hacking techniques does not mean you should just use them whenever.
            </p>
            <strong>RULE NUMBER ONE:</strong> Don't do anything illegal!
            <p>
                What does this mean in a hacking context?
            </p>
            <ul>
                <li>Never ever, ever, ever hack into a system that you do not have explicit permission to hack.</li>
                <li>Never attempt to find vulnerabilities in a system that you do not own or have permission to audit.</li>
            </ul>
            <p>
                So then how do you practice?
            </p>
            <ul>
                <li>run a server for yourself to hack</li>
                <li>stick to software and services with <em>bug bounty programs</em></li>
                <li>become an academic and get some (limited) exceptions</li>
                <li>become part of the competitive hacking community</li>
            </ul>

            <p><em>Note:</em> I actually do not care what you do. If you decide to go down the wrong route, it is all on you.</p>

            <h2>Flags</h2>

            <ul>
                <li> <strong>Flags</strong> are data tokens that you can redeem for points by solving challenges.</li>
                <li> To run a file: <code>./file-name</code></li>
            </ul>

        </div>
    )
}