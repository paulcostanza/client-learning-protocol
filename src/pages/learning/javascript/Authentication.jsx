import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Authentication() {
    const quizImports = {
        js: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const installPassport = `npm install passport passport-local`

    const usingExpress = `const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// initialize Passport middleware
app.use(passport.initialize());

// configure Passport to use the Local Strategy
passport.use(new LocalStrategy((username, password, done) => {
    // your database look-up and password verification logic goes here
}));`

    const passportAsMiddleWare = `app.post('/login', passport.authenticate('local'), (req, res) => {
  // if this function runs, then authentication was successful
  res.send(\`Welcome back, \${req.user.username}!\`);
});`

    const installHelmet = `npm install helmet`

    const usingHelmet = `const express = require('express');
const helmet = require('helmet');

const app = express();

// apply Helmet security middleware
app.use(helmet());`

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

            <h2>Passport.js</h2>

            <p>Now setting up custom suthentication requires writing a significant amount of manual logic. You have to handle reading the request headers, extracting cookies, verifying signatures, and managing errors. While building this yourself is great for learning, doing it for every production application is time-consuming and prone to security oversights.</p>

            <p>Developers use <strong>Passport.js</strong> as an authentication middleware for Node.js. It acts as a an organized framework that standarizes how you authenticate requests. It handles the low-level authentication details, allowing you to focus on the business logic of your application.</p>

            <p>The core idea behind Passport.js is that every application requires different ways to log in, but the underlying authentication flow should remain the same. Passport achieves this flexibility through modular plugins called <strong>Strategies</strong>.</p>

            <p>Instead of writing custom code for every authentication method, you install the specific strategy you need. There are over 500 strategies available, covering almost every authentication method used today. Some of them are:</p>

            <ul>
                <li><strong>passport-local:</strong> handles traditional username and password authentication against your own database.</li>
                <li><strong>passport-jwt:</strong> protects API endpoints by extracting and validating JSON Web Tokens from incoming requests.</li>
                <li><strong>passport-google-oauth20:</strong> allows users to log in instantly using their existing Google accounts.</li>
                <li><strong>passport-facebook:</strong> log in with Facebook accounts via OAuth2.0.</li>
            </ul>

            <p>By breaking authentication down into distinct strategies, Passport allows your application to grow seamlessly. If you start with a username/password system today and decide to add <em>Log in with Google</em> next month, you do not need to rewrite your entire authentication code. You just have to install the Google strategy and plug it into Passport.</p>

            <p>Now to use Passport in an Express application, you must install the core Passport package along with the specific strategy you plan to use. For a standard username and password setup, run the following command in your terminal:</p>



            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {installPassport}
                </SyntaxHighlighter>
            </div>

            <p>Once installed, you need to wire up Passport into your Express application setup. This must happen <em>before</em> you define your routes:</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {usingExpress}
                </SyntaxHighlighter>
            </div>

            <p>Passport integrates smoothly into the standard Express routing system as middleware. When a user submits their credentials to your login route, Passport intercepts the request, passes the data to your configured strategy, and evaluates the result.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {passportAsMiddleWare}
                </SyntaxHighlighter>
            </div>

            <p>If the strategy successfully verifies the user, Passport hadnles two critical tasks automatically:</p>

            <ol>
                <li><strong>Session management:</strong> it triggers helper functions to store a small piece of user data inside the session cookie.</li>
                <li><strong>Request Decoration:</strong> it attaches the authenticated user object directly to the incoming request as <code>req.user</code>.</li>
            </ol>

            <p>Once <code>req.user</code> is populated, any subsequent middleware or route handler in your application can instantly see who is logged in and make authorization decisions based on their identity.</p>

            <h2>Helmet.js</h2>

            <p>When building web applications, your backend server does more than just send data, it also sends hidden information back to the browser in the form of HTTP response headers. By default, Express configurations expose details about your server technology. Attackers can exploit these default headers to find vulnerabilities in your app!</p>

            <p>Helmet.js is a security middleware collection for Node.js applications. It acts as protective shield by automatically setting, modifying, or removing specific HTTP headers.</p>

            <p>By managing these headers, Helmet helps protect your application fromm common web vulnerabilities, malicious scripts, and sta sniffing attacks.</p>

            <p>And instead of requiring you to configure dozens of security protocols manually, Helmet configures a suite of smaller middleware functions out of the box. Installing it takes a single terminal command:</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {installHelmet}
                </SyntaxHighlighter>
            </div>

            <p>To apply this security blanket to your entire Express application, you require only one line of code:</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {usingHelmet}
                </SyntaxHighlighter>
            </div>

            <p>By initializing and placing <code>app.use(helment())</code> at the top of your middleware stack, Helmet intercepts every outgoing response and configures your HTTP headers securely. It handles several critical security jobs automatically. Some of the most important configurations it sets:</p>

            <ul>
                <li><strong>Hiding server technology (</strong><code>X-Powered-By</code><strong>):</strong> By default, Express advertises itself by sending the header <code>X-Powered-By: Express</code>. This tells heackers exactly what technology your backend runs on, allowing them to target version-specific bugs. Helmet completely removes this header, forcing attackers to guess your underlying setup blindly.</li>
                <li><strong>Mitigating cross-site scripting (</strong><code>Content-Security-Policy</code><strong>):</strong> Content Security Policy (CSP) is one of the most powerful defenses against Cross-Site Scripting (XSS) attacks. Helment establishes strick rules defining when the browser is allowed to load scripts, images, and styles from. This prevents malicious injectors from running unauthorized scripts in your users' browsers.</li>
                <li><strong>Preventing clickjacking (</strong><code>X-Frame-Options</code><strong>):</strong> Clickjacking occurs when a malicious site embeds your website inside an invisible <code>iframe</code>, tricking users into clicking buttons they did not intend to click. Helmet sets the <code>X-Frame-Options</code> header to <code>SAMEORIGIN</code>, ensuring your website cannot be embedded on external, untrusted domains.</li>
                <li><strong>Enforcing secure connections (</strong><code>Stick-Transport-Security</code><strong>):</strong> Helmet forces browsers to communicate with your server exclusively over secure HTTPS connections rather than insecure HTTP. This protects data from being intercepted by attackers on the same network.</li>
            </ul>

            <blockquote>
                <p>Even though it does not fix bugs in your custom code, Helmet will instantly harden your server configuration against automated scanners and common exploitation techniques.</p>
            </blockquote>



            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="authentication"
            />

        </div>
    )
}