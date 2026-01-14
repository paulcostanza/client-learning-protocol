const e=[{id:1,type:"radio",category:"html",subcategory:"navigation-and-linking",title:'target="_?"',question:"Which of the following `target` attributes opens a link in the parent of the current context?",options:["`_self`","`_unfencedTop`","`_parent`","`_blank`"],random:!0,answer:"`_parent`"},{id:2,type:"radio",category:"html",subcategory:"document-architecture",title:"UTF attribute?",question:"Which attribute is used to set the `UTF-8` character encoding for an HTML document?",options:["`charset`","`enctype`","`capture`","`accept`","`pattern`","`content`","`lang`","`encode`"],random:!0,answer:"`charset`"},{id:3,type:"radio",category:"html",subcategory:"fundamentals",title:"Why HTML",question:"What is the role of HTML on the web?",options:["HTML represents the content and structure for a web page","HTML is used for style and layout","HTML is used to add interactivity on the page","HTML is a registry for software packages"],random:!0,answer:"HTML represents the content and structure for a web page"},{id:4,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"Licensed to image",question:"Which image license works for the public domain?",options:["JPG","Creative Commons","BSD","Creative Commons 0"],random:!0,answer:"Creative Commons 0"},{id:5,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"How to false",question:"How do you set a boolean attribute to `false`?",options:["By using the `not` operator before the attribute name","By omitting the attribute from the element","By setting the attribute value to `0`",'By setting the attribute to an empty string (`""`)'],random:!0,answer:"By omitting the attribute from the element"},{id:6,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Why script",question:"What is the `script` element used for?",options:["It is used to embed Pascal code into the HTML document","It is used to embed C# code into the HTML document","It is used to embed JavaScript into the HTML document or link to an external JavaScript file","It is used to embed CSS into the HTML document or link to an external CSS file"],random:!0,answer:"It is used to embed JavaScript into the HTML document or link to an external JavaScript file"},{id:7,type:"radio",category:"html",subcategory:"document-architecture",title:"HTML title",question:"Which of the following elements is used to set the title for an HTML document?",options:["`title`","`footer`","`figcaption`","`section`"],random:!0,answer:"`title`"},{id:8,type:"radio",category:"html",subcategory:"organization-and-structure",title:"All class",question:"What is the `class` attribute typically used for?",options:["to define inline styles directly within the HTML tag","to specify unique identifiers for JavaScript functions","to embed metadata about the element","to apply a set of styles to multiple elements"],random:!0,answer:"to apply a set of styles to multiple elements"},{id:9,type:"radio",category:"html",subcategory:"navigation-and-linking",title:"Relative to who",question:"What is a relative path?",options:["it specifies the exact location of a file or directory from the root directory of the file system","it always begins with a forward slash (`/`) indicating the root directory of the website or file system","it specifies the location of a file or directory relative to the current working directory","it includes the full URL starting from the domain name to the specific file or directory"],random:!0,answer:"it specifies the location of a file or directory relative to the current working directory"},{id:10,type:"radio",category:"html",subcategory:"navigation-and-linking",title:"Link syntax",question:"Which of the following elements is the correct syntax for a `link` element?",options:['`<link rel="stylesheet" href="./styles.css"></link>`','`<link rel="stylesheet" href="./styles.css" />`',"None of the above"],random:!1,answer:'`<link rel="stylesheet" href="./styles.css" />`'},{id:11,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"No can do bucaroo",question:"Which of the following is NOT a valid value for working with open graph properties?",options:['`"og:image"`','`"og:type"`','`"og:socialMedia"`','`"og:title"`'],random:!0,answer:'`"og:socialMedia"`'},{id:12,type:"radio",category:"html",subcategory:"fundamentals",title:"Hey that might leak",question:"What does HTML stand for?",options:["HyperText Maker Language","HyperText Marker Language","HyperText Markdown Language","HyperText Markup Language"],random:!0,answer:"HyperText Markup Language"},{id:13,type:"radio",category:"html",subcategory:"fundamentals",title:"How to close",question:"Which of the following is the correct syntax for a closing tag?",options:["`<p>`","`<;p>`","`</p>`","`<\\p>`"],random:!0,answer:"`</p>`"},{id:14,type:"checkbox",category:"html",subcategory:"visual-content-and-media",title:"Valid for img",question:"Which of the following are valid attributes used inside the `img` element?",options:["`src`","`bold`","`closing`","`div`","`alt`","`pic`","`from`","`file`"],random:!0,answer:["`src`","`alt`"]},{id:15,type:"checkbox",category:"html",subcategory:"visual-content-and-media",title:"Boo who",question:"Which of the following is an example of a boolean attribute?",options:["`text`","`email`","`src`","`disabled`","`checked`","`required`","`loop`","`controls`","`muted`","`mute`","`mutes`"],random:!0,answer:["`disabled`","`checked`","`required`","`loop`","`controls`","`muted`"],description:`Some possible places for boolean attributes. 
~~~html
<input type="email" name="email" id="email" disabled />
<input type="checkbox" checked />
<input type="email" name="email" id="email" required />
<audio
  src="https://clientlearningprotocol.io/curriculum/js-music-player/dubstep.mp3"
  loop
  controls
  muted
></audio>
~~~
`},{id:16,type:"radio",category:"html",subcategory:"document-architecture",title:"Where do we encode?",question:"Where would you set the character encoding for your page?",options:["`meta` element in the `body`","`head` element in the `body`","`meta` element in the `head`","in the `DOCTYPE`"],random:!0,answer:"`meta` element in the `head`"},{id:17,type:"radio",category:"html",subcategory:"document-architecture",title:"Char encoding",question:"What is character encoding?",options:["a method computers use to store characters as data","a way to compress files","determines the font used to display text on a screen","refers to the process of converting spoken language into written text"],random:!0,answer:"a method computers use to store characters as data"},{id:18,type:"radio",category:"html",subcategory:"organization-and-structure",title:"Fake id",question:"Which of the following is NOT a correct value for the `id` attribute?",options:['`id="main"`','`id="div"`','`id="main-div"`','`id="main div"`'],random:!0,answer:'`id="main div"`'},{id:19,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Link to JS",question:"Which attribute is used to link to an external JavaScript file?",options:["the `div` attribute","the `defer` attribute","the `async` attribute","the `src` attribute"],random:!0,answer:"the `src` attribute"},{id:20,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Describe the web page",question:"Which element is used to set the description for a web page?",options:["`img`","`meta`","`slot`","`figure`"],random:!0,answer:"`meta`",description:`Inside of the \`head\` element is where you would find \`meta\`. For this website, it could look something like this: 
~~~html
<meta
  name="description"
  content="Learning about computer programming from a website for free."
/>
~~~
        `},{id:21,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Open graph properties",question:"What are open graph properties used for?",options:["embedding interactive multimedia content directly into web pages","set how your website's content will be seen on different social media platforms","generating dynamic pop-up advertisements on websites","encrypting sensitive data transmitted between web servers and users' browsers"],random:!0,answer:"set how your website's content will be seen on different social media platforms"},{id:22,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"No audio",question:"What attribute allows the audio to start in a muted state?",options:["`mute`","`quiet`","`pause`","`muted`"],random:!0,answer:"`muted`"},{id:23,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"Play/pause",question:"Which attribute lets you see the play and pause buttons?",options:["`loop`","`controls`","`details`","`muted`","`buttons`"],random:!0,answer:"`controls`"},{id:24,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"Don't do it",question:"Which file format should you never compress?",options:["WEBP","PNG","JPG","GIF"],random:!0,answer:"JPG"},{id:25,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"Master raster",question:"What is a raster image?",options:["an image which stores paths, lines, points, and curves","an image which stores color data for each pixel","all images are raster images","an image which is easily scalable"],random:!0,answer:"an image which stores color data for each pixel"},{id:26,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"How to vector",question:"What is a vector image?",options:["an image which stores paths, lines, points, and curves","an image which stores color data for each pixel","all images are vector images","an image which is not easily scalable"],random:!0,answer:"an image which stores paths, lines, points, and curves"},{id:27,type:"radio",category:"html",subcategory:"visual-content-and-media",title:"How to SVG",question:"How does an SVG store data?",options:["as pixels","as binary","as hexadecimal","as XML"],random:!0,answer:"as XML"},{id:28,type:"radio",category:"html",subcategory:"not-your-everday-elements",title:"Extended quotes",question:"Which HTML element is used for displaying extended quotations from other sources?",options:["`q`","`blockquote`","`cite`","`p`","`quote`"],random:!0,answer:"`blockquote`",description:`
~~~html
<!-- example: -->
<blockquote cite="https://www.imdb.com/title/tt0116367/">
  <p>"We didn't come here to give up — we came here to get out alive."</p>
  <footer>— George Clooney (as Seth Gecko), <cite>From Dusk Till Dawn</cite></footer>
</blockquote>
~~~
`},{id:29,type:"radio",category:"html",subcategory:"not-your-everday-elements",title:"Cite purpose",question:"What is the purpose of the `cite` element in HTML?",options:["to display inline quotations","to specify the source URL of a quotation","to mark up the title of a referenced creative work","to display extended quotations"],random:!0,answer:"to specify the source URL of a quotation",description:`It just specifies the source, but does not need to link to the actual website. 
~~~html
<div>
  <blockquote cite="https://genius.com/Limp-bizkit-nookie-lyrics">
    She put my tender heart in a blender, and still, I surrendered
  </blockquote>
  <p>—Limp Bizkit, <cite>Nookie</cite></p>
</div>
~~~
`},{id:30,type:"radio",category:"html",subcategory:"not-your-everday-elements",title:"Quote source",question:"Which HTML attribute is used to specify the source of a quotation in a block or inline quotation element?",options:["`href`","`src`","`title`","`cite`","`quote`"],random:!0,answer:"`cite`",description:`The attribute is not shown or displayed, rather it is used to assist with screen readers.
~~~html
<blockquote cite="https://genius.com/Limp-bizkit-nookie-lyrics">
  "I did it all for the nookie"
</blockquote>
~~~        
`},{id:31,type:"radio",category:"html",subcategory:"not-your-everday-elements",title:"Super text",question:"What is the primary use of the superscript element in HTML?",options:["to show text in a larger font size","to show text in a smaller font size","to display text above the normal line of text","to display text below the normal line of text","to underline text for importance"],random:!0,answer:"to display text above the normal line of text"},{id:32,type:"radio",category:"html",subcategory:"not-your-everday-elements",title:"Sub text",question:"What is the primary use of the subscript element in HTML?",options:["to show text in a larger font size","to show text in a smaller font size","to display text above the normal line of text","to display text below the normal line of text","to underline text for importance"],random:!0,answer:"to display text below the normal line of text"},{id:33,type:"radio",category:"html",subcategory:"not-your-everday-elements",title:"Code element",question:"What is the `code` element used for?",options:["creating hyperlinks to other web pages","formatting text with bold or italic styles","representing short snippets of code inside text","embedding images and multimedia files"],random:!0,answer:"representing short snippets of code inside text"},{id:34,type:"radio",category:"html",subcategory:"not-your-everday-elements",title:"Pre element",question:"What is the `pre` element used for?",options:["represent preformatted text","preventing text from appearing on screen","precision placement of text","pretending it's an element"],random:!0,answer:"represent preformatted text"},{id:35,type:"radio",category:"html",subcategory:"semantic-html",title:"Article vs section",question:"What is the difference between `article` and `section`?",options:["`article` is for self-contained content, while `section` divides content into smaller groups","`section` is for self-contained content, while `article` divides content into smaller groups"],random:!0,answer:"`article` is for self-contained content, while `section` divides content into smaller groups",description:`\`article\` represents independent, self-contained content that could stand alone outside the page. Think blog posts, news stories, or forum post. 

\`section\` is used to group related content within a page. Think themes that are group together. Things like chapters, headings, or topic sections.
~~~html
<main>
  <h1>Welcome to the Example</h1>
  <section> 
    <h2>Section #1</h2>
    <article>
        <p>Bunch of stuff.</p>
    </article>
  </section>
  <section>
    <h2>Seciton #2</h2>
    <article>
        <p>More stuff.</p>
    </article>
    <article>
        <p>Even more stuff.</p>
    </article>
  </section>
</main>
~~~
`},{id:36,type:"radio",category:"html",subcategory:"semantic-html",title:"Stand alone content",question:"The _____ element is used for content that could stand alone and be republished elsewhere.",options:["`main`","`header`","`footer`","`aside`","`section`","`article`"],random:!0,answer:"`article`",description:`
~~~html
<main>
  <section>
    <h1>The Simpsons</h1>
    <article>
      <h2>Why the first 10 seasons are great</h2>
      <p>...</p>
    </article>
    <article>
      <h2>Why everything after season 10 is bad</h2>
      <p>...</p>
    </article>
  </section>
</main>
~~~`},{id:37,type:"radio",category:"html",subcategory:"forms",title:"For attribute role",question:"What is the role of the `for` attribute inside the `label` element?",options:["indicates the color of the label text","used to explicitly associate a label with an input","specifies the alignment of the label within its container","defines a JavaScript function to execute when the label is clicked"],random:!0,answer:"used to explicitly associate a label with an input",description:`The \`for\` attribute in the label element must match the \`id\` attribute in the input element to become explicitly associated.
~~~html
<label for="firstName">First Name:</label>
<input id="firstName" type="text" size="8" />
~~~
`},{id:38,type:"checkbox",category:"html",subcategory:"forms",title:"Input type values",question:"Which of the following is/are correct value(s) for the `type` attribute used inside inputs?",options:["`choice`","`text-box`","`number`","`text`","`button`"],random:!0,answer:["`number`","`text`","`button`"]},{id:39,type:"checkbox",category:"html",subcategory:"forms",title:"Button type values",question:"Which of the following are valid values for the `type` attribute inside a `button` element?",options:["`src`","`button`","`reset`","`submit`"],random:!0,answer:["`button`","`reset`","`submit`"]},{id:40,type:"radio",category:"html",subcategory:"forms",title:"Alt button element",question:"What is another element you can use to represent a button?",options:["`img`","`form`","`header`","`input`","`btn`"],random:!0,answer:"`input`",description:`Example: 
~~~html
<input type="button" value="Input Button" onclick="alert('Input button pressed!')" />
~~~`},{id:41,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Tree structure name",question:"What is the tree-like structure that represents the elements on a page called?",options:["BOM","DOM","CSS"],random:!0,answer:"DOM",description:"DOM aka *Document Object Model*"},{id:42,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Elements tab role",question:"What is the role of the *elements* tab in the developer tools?",options:["shows you the HTML structure of the page you are on","shows you the CSS structure of the page you are on","shows you the JavaScript structure of the page you are on","shows you the PHP structure of the page you are on"],random:!0,answer:"shows you the HTML structure of the page you are on"},{id:43,type:"radio",category:"html",subcategory:"forms",title:"Form attribute",question:"Which of the following attributes is used to specify the URL where the form data should be sent within a `form` element?",options:["`capture`","`accept`","`lang`","`action`","`method`"],random:!0,answer:"`action`",description:"An `action`'s value is the API endpoint where our data we collect is sent to on the server."},{id:44,type:"checkbox",category:"html",subcategory:"tables",title:"Table row elements",question:"Which two elements are used to specify a row with a data and a header element in a table?",options:["`row` element is used for rows","`th` element is used for the header elements","`tr` element is used for rows","`head` element is used for the header elements","`r` element is used for rows","`thead` element is used for the header elements"],random:!0,answer:["`tr` element is used for rows","`th` element is used for the header elements"],description:` The \`tr\` represents each row in a table. The \`th\` represents the category, typically at the top of a column (but sometimes resides on the left side).
~~~html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>

  <tr>
    <td>Paul</td>
    <td>37</td>
    <td>Night City</td>
  </tr>
</table>
~~~        
`},{id:45,type:"radio",category:"html",subcategory:"tables",title:"TD element purpose",question:"What is the `td` element used for?",options:["defines a table cell","defines a table data type","merges two columns","merges two rows"],random:!0,answer:"defines a table cell",description:`A table cell is where our data for the table's the rows and columns reside. Example:
~~~html
<table>
  <thead>     
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Mid-term Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Davis</td>
      <td>Alex</td>
      <td>54</td>
    </tr>
  </tbody>
</table>        
~~~

Our table has one row of data with the data values of *Davis*, *Alex*, and *54*... Alex should really study more. 
`},{id:46,type:"radio",category:"html",subcategory:"tables",title:"Colspan function",question:"What is the function of the `colspan` attribute?",options:["it removes the breakline between text in a column","used to define the number of columns","defines the number of columns a table cell should span","defines the length of a column in a table"],random:!0,answer:"defines the number of columns a table cell should span"},{id:47,type:"radio",category:"html",subcategory:"forms",title:"Placeholder role",question:"What is the role of the `placeholder` attribute?",options:["used to send data to the server when the form is submitted","used to specify that an input field is read-only to the user","used to associate a `label` element with an `input` element","used to provide a hint for an input field"],random:!0,answer:"used to provide a hint for an input field"},{id:48,type:"radio",category:"html",subcategory:"forms",title:"Explicit form association",question:"Which of the following is an example of explicit form association between labels and inputs?",options:['`<label for="age">Age:</label><input type="number" id="age" name="age">`','`<label connect="age">Age:</label><input type="number" id="age" name="age">`','`<label explicit="age">Age:</label><input type="number" id="age" name="age">`','`<label associate="age">Age:</label><input type="number" id="age" name="age">`'],random:!0,answer:'`<label for="age">Age:</label><input type="number" id="age" name="age">`'},{id:49,type:"radio",category:"html",subcategory:"tables",title:"Table cell element",question:"Which element is used to define a cell in a table?",options:["`td`","`tcol`","`tc`","`th`","`c`","`tcell`"],random:!0,answer:"`td`",description:"`td`: *table data* is used to define the cell within a table"},{id:50,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"DOM inspection tool",question:"Which of the following is a tool that allows you to inspect and modify the HTML structure of a web page?",options:["DOM validation","DOM removal","DOM inspector","DOM tester"],random:!0,answer:"DOM inspector"},{id:51,type:"radio",category:"html",subcategory:"forms",title:"Fieldset grouping",question:"Which of the following is the correct way to group related input fields inside of the `fieldset` element?",options:["`<legend>User information</legend>`","`<p>User information</p>`","`<caption>User information</caption>`","`<title>User information</title>`"],random:!0,answer:"`<legend>User information</legend>`"},{id:52,type:"radio",category:"html",subcategory:"forms",title:"Required attribute",question:"Which attribute specifies that an input must be filled out before submitting the form?",options:["`obligatory`","`necessary`","`required`","`essential`"],random:!0,answer:"`required`"},{id:53,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Devtools purpose",question:"What are Devtools used for?",options:["automatically format your code","spot any linting issues in your code","help you debug, profile, and analyze web pages","help you ensure 100% test coverage for your code"],random:!0,answer:"help you debug, profile, and analyze web pages",description:"Devtools are built directly into the browser and are used to help you debug, profile, and analyze web pages."},{id:54,type:"radio",category:"html",subcategory:"forms",title:"Disable input",question:"Which of the following is the correct way to disable an input?",options:['`<input type="checkbox" disableInput />`','`<input type="checkbox" disabled />`','`<input type="checkbox" inputDisabled />`','`<input type="checkbox" disabling />`'],random:!0,answer:'`<input type="checkbox" disabled />`'},{id:55,type:"checkbox",category:"html",subcategory:"forms",title:"Valid input types",question:"Which of the following is a valid value for the `type` attribute?",options:['`<input type="email" />`','`<input type="capture" />`','`<input type="action" />`','`<input type="text" />`','`<input type="number" />`'],random:!0,answer:['`<input type="email" />`','`<input type="text" />`','`<input type="number" />`']},{id:56,type:"radio",category:"html",subcategory:"forms",title:"Size attribute usage",question:"Which of the following is the correct use of the `size` attribute?",options:['`<input id="full-name" type="text" size="10" />`','`<input id="full-name" type="text" size="large" />`','`<input id="full-name" type="text" size="10vh" />`','`<input id="full-name" type="text" size="0.001" />`'],random:!0,answer:'`<input id="full-name" type="text" size="10" />`',description:"The number in this context refers to how many *characters* the input can hold, not a CSS measurement. It also cannot measure a fraction of a character."},{id:57,type:"checkbox",category:"html",subcategory:"forms",title:"Char length attributes",question:"Which of the following attributes are used to specify the minimum and maximum number of characters required in an input field?",options:["`min`","`max`","`minlength`","`maxlength`","`minimumLen`","`maximumLen`","`minlen`","`maxlen`"],random:!0,answer:["`minlength`","`maxlength`"],description:`In the example our email field has a minimum length of 4 characters and a maximum length of 64 characters.
~~~html
<form action="" method="POST">
  <label for="email">Email Address (Required field):</label>
  <input
    required
    type="email"
    name="email"
    id="email"
    minlength="4"
    maxlength="64"
  />
  <button type="submit">Submit Form</button>
</form>
~~~ 
`},{id:58,type:"checkbox",category:"html",subcategory:"forms",title:"Incorrect button types",question:"Which of the following button examples does NOT use a correct value for the `type` attribute?",options:['`<button type="button">Press Button</button>`','`<button type="submit">Submit</button>`','`<button type="btn">Press Button</button>`','`<button type="reset">Reset</button>`','`<button type="rst">Reset</button>`','`<button type="press">Press</button>`','`<button type="select">Select</button>`','`<button type="apply">Apply</button>`','`<button type="clear">Clear</button>`'],random:!0,answer:['`<button type="btn">Press Button</button>`','`<button type="rst">Reset</button>`','`<button type="press">Press</button>`','`<button type="select">Select</button>`','`<button type="apply">Apply</button>`','`<button type="clear">Clear</button>`']},{id:59,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Some nice ASSets",question:"What is the assets directory used for in a web application?",options:["to store server log files which are kept to monitor web application performance","to store files such as images, fonts, and other resources","to store scripts and tools for testing the web application","to hold third-party libraries and frameworks"],random:!0,answer:"to store files such as images, fonts, and other resources",description:""},{id:60,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"",question:"What is a `README.md` file commonly used for in a project?",options:["to store personal information and data collected from users","to define the structure and schema of the project's database","to provide useful information about the project","to track and document issues and bugs found in the project"],random:!0,answer:"to provide useful information about the project",description:"`README` files are commonly used to provide useful information about the project, such as what it does, how to use it, how to install it, its license, how to contribute, and any other relevant details."},{id:61,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Roots",question:"What does the root directory represent in a file system?",options:["the default folder where downloaded files are saved","the folder that holds cached files and data to speed up system operations","the folder that contains logs and diagnostic information about system performance","the starting point for all file paths and contains all other directories and files within it"],random:!0,answer:"the starting point for all file paths and contains all other directories and files within it",description:`An example of the root directory (\`.\`) and all the folders & files based off it in a project: 
~~~text
.
├── /assets
│   ├── /images
│   │   └── icons.svg
│   └── /fonts
│       └── custom-font.woff
├── /css
│   ├── main.css
│   ├── about.css
│   └── contact.css
├── index.html
├── about.html
├── contact.html
└── README.md
~~~`},{id:62,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"",question:"Which file format is best suited for images with sharp edges and transparent backgrounds?",options:["`JPEG`","`PNG`","`GIF`","`SVG`","`PIC`"],random:!0,answer:"`PNG`"},{id:63,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Lossless or lossy",question:"Which one of these options is an audio format known for its lossless compression?",options:["`MP3`","`WAV`","`SVG`","`MP4`"],random:!0,answer:"`WAV`"},{id:64,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"ISP",question:"Which one of the following ISP connections are typically the fastest?",options:["DSL","satellite","cable","fiber optic"],random:!0,answer:"fiber optic"},{id:65,type:"radio",category:"html",subcategory:"intro-into-web-development",title:"Master of your...",question:"What does the term *domain name* refer to?",options:["the address used to identify websites on the internet","a type of software that manages website files and databases","the physical location of a web server in a data center"],random:!0,answer:"the address used to identify websites on the internet"}];export{e as default};
