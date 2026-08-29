import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Authentication() {
    const quizImports = {
        js: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    return (
        <div className="container">

            <h1>Authentication</h1>

            <blockquote>
                <p>Who the hell are you?!</p>
            </blockquote>

            <p>While they may sound similar and work together, authentication and authorization handle completely different jobs in a backend system.</p>

            <p><strong>Authentication</strong> decides who you are. It is the process of verifying a user's identity. <em>Is this person who they claim to be?</em></p>

            <p>When a user registers for an account, they provide a unique identifier, such as a username, email, a password, and other credentials. This information is then stored securely in the database. The next time the user visits and tries to log in, the backend system compares the credentials they type against the records stored in the database.</p>

            <p>Backend developers use three main categories of factors to authenticate users:</p>

            <ol>
                <li><em>Something you know.</em> A password, PIN, or the anser to a security question.</li>
                <li><em>Something you have.</em> A physical smartphone receiving an SMS verification code, or a temporar token from an authenication app.</li>
                <li><em>Something you are.</em> Biometric data like a fingerprint or a facial recognition scan.</li>
            </ol>

            <p>Once the system successfully authenticates the user, authorization takes over and decides what the user is allowed to do or access. <em>What permissions does this specific identity have?</em></p>

            <p>Just because a user successfully logs in does not mean they should have total control over the application. <strong>Authorization</strong> defines the rules, roles, and boundaries for that user.</p>

            <ul>
                <li><em>Standard user.</em> Can edit their own profile, but they cannot view other users' private billing information.</li>
                <li><em>Editor.</em> Can write and publish blog posts, but they cannot delete the entire website codebase.</li>
                <li><em>Admin.</em> Has full clearance to modify databases, delete users, and change system-wide settings.</li>
            </ul>

            <p>In backend code, authorization usually happens within <strong>middleware</strong> functions that check a user role or specific permissions before granting access to certain pages or data.</p>

            <blockquote>
                <p>Authentication must always happen first, then authroization. Authentication is the key that opens the front door, and authorization decides which rooms you can enter once you are inside.</p>
            </blockquote>

            <h2>What are JSON web tokes?</h2>

            <blockquote>
                <p>So what happens after a user is logged in?</p>
            </blockquote>

            <p>The server remembers who a user is when they navigate to different pages with JWTs. <strong>JSON Web Tokens</strong> are a digital keycard that the server issues to a user after a successful login. The user presents this keycard to the server on every subsequent request to prove their identity without re-entering their password.</p>

            <p>Instead of the server remembering every active user in its own memory, it shifts the responsibility to the client using a simple four-step process:</p>

            <ol>
                <li><strong>Login:</strong> the user sends their username and password (or the other means of login) to the server.</li>
                <li><strong>Issue:</strong> the server verifies the credentials against the credentials that were stored when they sign up. If they are correct, the server generates a JWT and sends it back to the user.</li>
                <li><strong>Storage:</strong> the client receives the JWT and stores it, typically in a browser cookie or local storage.</li>
                <li><strong>Request:</strong> for every future request to a protected route, the client automatically sends the JWT along. The server verifies the token and grants access.</li>
            </ol>

            <p>A JWT looks like a long, chaotic string of characters. It consists of three distinct parts separated by two dots, like so:</p>

            <p><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OCIsIm5hbWUiOiJKYW5lIERvZSIsImFkbWluIjp0cnVlLCJpYXQiOjE1MTYyMzkwMjJ9.Lfu39gE9OI8rhPXbmJMorXTtVappkNMw9xq-M4HXttA</code></p>

            <p>JWTs are broken down into three parts...</p>

            <ol>
                <li>The first part of the token is the <strong>header</strong>, an encoded JSON object that tells the server what type of token it is (in this case JWT) and which hashing algorithm was used to secure it, such as HMAC SHA256.</li>
                <li>The <strong>payload</strong> is the middle part of the token. It contains the actual data, or <em>claims</em> about the user. This is where you store information like the user ID, username, or account role such as admin or user.</li>
                <li>The <strong>signature</strong> is the final part of the token. The server takes the encoded header, the encoded payload, and mixes them together with a secret key known only to the server. It hen hashes them to create the signature.</li>
            </ol>

            <blockquote>
                <p>An important security note is that the header and payload are only encoded (Base64), not encrypted. This means anyone can easily decode them and read the data inside. So <strong>never</strong> store sensitive data like raw passwords or credit card numbers inside a JWT payload!</p>
            </blockquote>

            <p>The signature prevents tampering. If a user tries to decode their token, change their role from <em>user</em> to <em>admin</em>, and re-encode it. The signuature will no longer match the altered data!</p>

            <p>When the server recieves the modified token, it attempts to recreate the sugnature using its secret key. Because the payload changed, the calculated sinature will not match the token's signature, and the server will instantly reject the request with a <code>401 Unauthroized</code> status code.</p>

            <p>JWTs allow <em>stateless</em> authentication. The server does not need to store session data in a database, it simply trusts the token because the signature proves the server itself created it. </p>

            <h2>Cross-Site Request Forgery</h2>

            <p>Automatically sending cookies with every request introduces a unique security vulnerability called <strong>Cross-Site Request Forgery</strong>.</p>

            <p>CSRF is an attack that forces an authenticated user to execute unwanted actions on a web application where they are currently logged in. In a CSRF attack, a malicious website tricks the victim's browser into making a fraudulent request to your backend server, exploiting the server trust in the user browser cookie. Let's examin a banking application to understand CSRF:</p>

            <ol>
                <li><strong>The setup:</strong> you log into your bank website, <code>lameo-bank.net</code>. The bank validates your credntials and stores a session token in your browser cookie.</li>
                <li><strong>The trap:</strong> without logging out of your bank, you open a new browser tab and visit a malicious website, <code>totally-legit.com</code>.</li>
                <li><strong>The trigger:</strong> the malicious website contains a hidden script or a form that automatically submits a request to the bank's backend, such as <code>POST lameo-bank.net/transfer?amount=500&to=hacker</code>.</li>
                <li><strong>The execution:</strong> because you are still logged into your bank, your browser automatically appends your bank session cookie to that request. The bank server sees a valid cookie, assumes you made the request intentionally, and transfer your money.</li>
            </ol>

            <p>The critical takeway here is that the malicious website cannot read your cookie or steal your data directly. Instead, it simply piggybacks on the fact that your browser automatically attaches cookies to any request going to the target server.</p>

            <p>To prevent attacks like this we have two methods: <code>Same Site Cookie Attribute</code> and <code>CSRF Tokens</code>.</p>

            <p>The simplest defense is setting the <code>Same Site</code> attribute on your cookies. This tells the browser when it is allowed to send the cookie along with cross-site requests.</p>

            <ul>
                <li><code>SameSite=Strict</code> makes sure that the browser never sends the cookie if the request originates from a third-party website.</li>
                <li><code>SameSite=Lax</code> will make the browser allow cookies only when a user safely navigates to the target site, such as clicking a standard link, but will block them on cross-site form submissions or API requests.</li>
            </ul>

            <p>For robust protection, backend frameworks use CSRF tokens. When a user loads a page, the backend generates a random, unique, and unpredictable token and attaches it to the frontend form or session.</p>

            <p>When the client submits a request, they must include this token in the cutsom request headers of form data. The backend compares the submitted token against the token saved in the user session. Because a malicious website cannot access your frontend to copy this secret token, any cross-site request they forge wil lack this token and fail validation. </p>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="authentication"
            />

        </div>
    )
}