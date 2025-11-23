import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import IDE from '../../../components/IDE'

export default function IntroIntoWebDevelopment() {
    const quizImports = {
        html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
    }

    const javascript101 = `<body>
  <script>
    alert("Hello nerd!")
  </script>
</body>`

    const linkToJSFile = `<body>
  <script src="path-to-js-file.js"></script>
</body>`

    const seo = `<meta
  name="description"
  content="Learning about computer programming from a website for free."
/>`

    const ogTitle = `<meta content="clientlearningprotocol.io" property="og:title" />`

    const ogImg = `<meta property="og:type" content="website" />
<meta
  content="https://clientlearningprotocol.io/platform/universal/logo-pic.png"
  property="og:image"
/>
<meta property="og:url" content="https://clientlearningprotocol.io" />`

    const link = `<link rel="stylesheet" href="./styles.css" />`

    const brokenLink = `<p>Client Learning Protocol's <a href="https:/clientlearningprotocol.io/#/htm1">HTML section</a></p>`

    const folderStructure = `.
├── /assets
│   ├── /images
│   │   ├── logo.png
│   │   ├── banner.jpg
│   │   └── icons.svg
│   ├── /fonts
│   │   ├── custom-font.woff
│   │   └── custom-font.woff2
├── /css
│   ├── main.css
│   ├── about.css
│   └── contact.css
├── index.html
├── about.html
├── contact.html
└── README.md
`

    return (
        <div className="container">

            <h1>Intro into Web Development</h1>

            <h2>What's a JavaScript?</h2>

            <p><strong>JavaScript</strong> is a programming language that makes your webpage interactive. It lets you tell the page what to do when someone clicks a button, submit a form, or any other interactivity.</p>

            <p>The <strong>script</strong> element is used to embed and execute JavaScript code. You might remember it from the boilerplate from earlier. Here is the most basic way to add it to your HTML file:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {javascript101}
                </SyntaxHighlighter>
            </div>

            <p>In this example we use <code>alert</code> to display the message <em>Hello nerd!</em> When the page loads, the alert will immediately pop up. Then the user can click on the OK button to dismiss the message.</p>

            <p>While you can technically write all your JavaScript code inside the <code>script</code> tags, it is considered best practice to link to an external JavaScript file instead. Here is an example of using the <code>script</code> element to link to an external JavaScript file:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {linkToJSFile}
                </SyntaxHighlighter>
            </div>

            <p>Our friend the <code>src</code> attribute is used here to specify the location for the external JavaScript file. It is <em>highly</em> encouraged that you keep your JavaScript code separate from the HTML to help keep your project organized. From there, you can further break the JS file into distinct sections and have each section address and resolve a simple idea/issue/concern. This is a kind of <strong>design principle</strong> we will dive into when we go into a programming language.</p>

            <h2>SEO</h2>

            <p><strong>SEO</strong> (search engine optimization) is a practice that optimizes web pages so they become more visible and rank higher on search engines. One way to improve your site's SEO, is to provide a short description for the web page using the <code>meta</code> element like so:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {seo}
                </SyntaxHighlighter>
            </div>

            <p>By setting the <code>name</code> attribute to <code>description</code>, it ensures that browsers, search engines, and other web tools correctly interpret this metadata. The <code>content</code> attribute is where you will place your description.</p>

            <h2>Open Graph Tags</h2>

            <p><strong>Open graph tags</strong> come from the open graph protocol, which enables you to control how your website's content appears across various social media platforms, such as FB, LI, etc.</p>

            <p>By setting these open graph properties, you can entice users to click and engage with your content. You can set these properties through a collection of <code>meta</code> elements inside your HTML <code>head</code> section.</p>

            <p>An important OG property to include would be the <code>title</code>:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {ogTitle}
                </SyntaxHighlighter>
            </div>

            <p>The <code>property</code> attribute requires you to specify that it is <code>og:title</code>. The <code>content</code> attribute is where you will write the title you want displayed for social media sites.</p>

            <ul>
                <li><strong><code>og:type</code> property:</strong> the <code>type</code> property is used to represent the type of content being shared on social media. Examples of this content include articles, websites, videos, or music.</li>
                <li><strong><code>og:image</code> property:</strong> sets the image shown for social media post. From the developers.facebook.com documentation page: <em>use images that are at least 1200 by 630 pixels for the best display on high resolution devices. At the minimum, you should use images that are 600 by 315 pixels to display link page posts with larger images</em>.</li>
                <li><strong><code>og:url</code> property:</strong> sets the URL that users will click on for the social media posts.</li>
            </ul>

            <p>Let's combine everything to see what it could look like:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {ogImg}
                </SyntaxHighlighter>
            </div>

            <p>So how do these open graph properties affect Search Engine Optimization? When your content is shared on social media, well-crafted OG properties can enhance the appearance for your content in users' feeds. This can lead to higher click-through rates which could signal to search engines that your content is pretty good.</p>

            <h2>Linking</h2>

            <p><strong>Link element:</strong> used to link to external resources like stylesheets and site icons. Here is the basic syntax for using the <code>link</code> element for an external CSS file. The <code>rel</code> attribute is used to specify the relationship between the linked resource and the HTML document, while the <code>href</code> attribute is used to specify the location of the URL for the external resource.</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {link}
                </SyntaxHighlighter>
            </div>

            <h2>Web browsers</h2>

            <p>Here is a list of the major web browsers you will work with and/or need to make sure your website works on. There is much overlap, but some may have default settings and standards that you need to take into account when working on your project.</p>

            <ul>
                <li><strong>Google Chrome</strong> This is a free web browser developed by Google and first released in 2008.</li>
                <li><strong>Firefox</strong> This is a free web browser developed by the Mozilla Corporation and first created in 2004.</li>
                <li><strong>Safari</strong> This browser was developed by Apple and is the default browser for iPhone, iPad and Mac devices.</li>
                <li><strong>Brave</strong> This is a free web browser first released in 2016 that is based on the Chromium web browser.</li>
                <li><strong>Arc</strong> This is a free Chromium based web browser first released in 2023 by The Browser Company.</li>
            </ul>

            < h2 > How to use the DOM inspector and DevTools to Debug</h2 >

            <p>When you are building out your projects, you will frequently run into issues where your programs are not working as expected. Programmers often refer to issues as bugs. The process of finding and fixing these bugs is known as <strong>debugging</strong>.</p>

            <p>To debug your code, you will need to use some tools provided by your browser. Two important tools to use would be the DOM inspector and developer tools.</p>

            <ul>
                <li>The <strong>DOM inspector</strong> allows you to inspect the HTML structure of the page you are on. The <em>Document Object Model</em>. Is a tree-like structure that represents the elements on a page. (More on the DOM later)</li>
                <li>The <strong>developer tools</strong> allow you to inspect the HTML, CSS, and JavaScript of the page you are on.</li>
            </ul>

            <IDE
                HTMLStart={brokenLink}
            />

            <p>Oh no! Our link seems to be broken :(</p>

            <p>When we click on the link, it will lead to a 404 page. A <strong>404 page</strong> is an error page that appears when a user tries to access a webpage that does not exist on the server.</p>

            <p>The intent is for the link to lead to the Client Learning Protocol's HTML section. To see what the issue might be, you can use the developer tools.</p>

            <p>To open the developer tools in your browser, you can right-click on the page and select <code>Inspect</code> (or <code>Control Shift I</code> on PC or <code>Command Option I</code> on Mac). When you open developer tools in Google Chrome, you will encounter a number of tabs. The first tab is called the <code>Elements</code> tab. This tab shows you the HTML structure of the page you are on.</p>

            <p>The second is called the <code>Console</code> tab. This tab shows you any errors that might be occurring on the page.</p>

            <p>In this situation where you have a broken link, you can check the console to see the error messages for that broken link. The common message that continues to display for the broken link is the 404 error. The 404 error indicates that the page is not found.</p>

            <p>This lets us know that the issue is with the URL in the anchor element. When you inspect the <code>href</code> value you will find a typo.</p>

            <p>Right now the console message shows <code>/htm1</code> against a 404, but the correct URL should be <code>/html</code> (how on earth did that happen?!). When the link is corrected, then it will work as expected.</p>

            <h2>What are best practices for file/folder organization in web applications?</h2>

            <p>When building out web applications, it is important to think about the organization of your files and folders. This will help keep your code organized and easier to maintain. For example:</p>

            <div className="">
                <SyntaxHighlighter language="text" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {folderStructure}
                </SyntaxHighlighter>
            </div>

            <p>At the top of the example there is a single dot (<code>.</code>) which represents the root directory.</p>

            <p>The root directory is the top-level directory in a file system, serving as the starting point for all file paths and containing all other directories and files. A <strong>directory</strong> is another name for a folder.</p>

            <p>Inside the root directory, the first directory shown is the <code>assets</code> directory. The term <code>assets</code> refers to any files that are used in the project, such as images, fonts, or other resources.</p>

            <p>In this example, there are two directories inside the <code>assets</code> directory called <code>images</code> and <code>fonts</code>.</p>

            <p>
                The next directory would be the <code>css</code> directory. Sometimes this is also referred to as a stylesheets directory. This is where you would store all of your CSS files.
            </p>

            <p>Below the <code>css</code> directory are the HTML files. The <code>index.html</code> file represents the homepage, while <code>about.html</code> and <code>contact.html</code> represent the About and Contact pages, respectively.</p>

            <p>Lastly, there is a <code>README.md</code> file. <code>README</code> files are commonly used to provide useful information about the project, such as what it does, how to use it, how to install it, its license, how to contribute, and any other relevant details. The <code>.md</code> extension stands for Markdown, which is a lightweight markup language that is often used to write documentation.</p>

            <p>There are many different ways to structure a project, as this is just one way. By organizing your project into assets, CSS, HTML, JS, and all sorts of other files, it makes it easy to find what you are looking for. This also makes it easy for other developers to contribute to your project.</p>

            <h2>What are some common file types you will work with in web applications?</h2>

            <p>Files are classified based on their content and structure. The file type determines how a file is opened and processed by computer programs.</p>

            <p>We identify file types based on their extensions. A <strong>file extension</strong> is a three or four letter suffix at the end of the file name. The three main file types that you will find in a web application are HTML, CSS, and JavaScript.</p>

            <ul>
                <li>HTML files contain the structure and content of the web application. They use the <code>.html</code> extension.</li>
                <li>CSS files define the style. They use the <code>.css</code> file extension.</li>
                <li>JavaScript files add more advanced functionality and interactivity. They use the <code>.js</code> file extension.</li>
            </ul>

            <p>Most applications have some sort of images on them. Here are some of the most widely used image file types you will encounter (some of this should be a review for you):</p>

            <ul>
                <li><strong>JPEG</strong>, <em>Joint Photographic Experts Group</em>, is known for its efficient compression. It is great for photographs and images. However, the compression is lossy, which means that some image quality is lost to reduce the file size.</li>
                <li><strong>PNG</strong>, <em>Portable Network Graphics</em>, preserves image quality, even after compression. This results in larger files. PNG supports transparency and it is great for images with sharp edges, such as logos and icons.</li>
                <li><strong>GIF</strong>, <em>Graphic Interchange Format</em>, supports both animation and transparency, but with a limited color palette.</li>
                <li><strong>SVG</strong>, <em>Scalable Vector Graphics</em>, a vector image format. These images can be scaled as much as needed without losing quality.</li>
            </ul>

            <p>Don't forget about video and audio formats!</p>

            <ul>
                <li>MP3 is an audio format known for its efficient compression. It is a lossy format, so some audio data is lost during the compression to make these files smaller.</li>
                <li>MP4 is one of the most common video formats. It offers good compression and supports multiple audio and video codecs, subtitles, and metadata.</li>
                <li>MOV, the QuickTime multimedia file format developed by Apple, is primarily associated with QuickTime Player.</li>
                <li>WAV, a lossless audio format that keeps the original quality of the audio.</li>
                <li>WebM, a high-quality open-source video format.</li>
            </ul>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro-into-web-development"
            />
        </div >
    )
}
