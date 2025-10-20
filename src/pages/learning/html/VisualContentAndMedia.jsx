import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IDE from '../../../components/IDE'
import MonaAndCat from '../../../assets/html/visualcontentandmedia/mona-and-cat.png'

export default function VisualContentAndMedia() {
    const voidElements = `<img>
<img />
<meta>
<meta />`

    const monaLisaCat = `<img src="${MonaAndCat}" alt="mona lisa and her cat" />`

    const attributeExample = `<element attribute="value"></element>`

    const linkExample = `<p><a href="clientlearningprotocol.io">Landing page</a> of CLP.</p>`

    const inputExample = `<input type="checkbox" checked />
<input type="checkbox" />
<input type="checkbox" checked />
<input type="checkbox" />`

    const smiles = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" stroke="black" stroke-width="4" fill="yellow" />
  <circle cx="35" cy="40" r="5" fill="black" />
  <circle cx="65" cy="40" r="5" fill="black" />
  <path d="M35 65 Q50 80 65 65" stroke="black" stroke-width="4" fill="transparent" />
</svg>`

    const icons = `<!-- Star Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="gold" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L14.9 8.6L22 9.3L17 14.1L18.3 21.2L12 17.8L5.7 21.2L7 14.1L2 9.3L9.1 8.6L12 2Z"/>
</svg>

<!-- Heart Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="crimson" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 6 4 4 6.5 4C8 4 9.5 4.8 10.5 6.09C11.5 4.8 13 4 14.5 4C17 4 19 6 19 8.5C19 12.28 15.6 15.36 10.45 20.04L12 21.35Z"/>
</svg>

<!-- Checkmark Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.29 5.71L9 17L3.71 11.71L5.12 10.29L9 14.17L18.88 4.29L20.29 5.71Z"/>
</svg>`

    const audioExample = `<audio src="SexyTime.mp3" controls></audio>`

    const audioWithAttributes = `<audio
  src="https://clientlearningprotocol.io/curriculum/js-music-player/dubstep.mp3"
  loop
  controls
  muted
></audio>`

    const audioControls = `<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.wav" type="audio/wav" />
  <source src="audio.mp3" type="audio/mpeg" />
</audio>`

    const video = `<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
></video>`

    const videoWithAttributes = `<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620"
></video>`

    return (
        <div className="container">
            <h1>Visual Content & Media</h1>

            <h2>Void Elements</h2>

            <p><strong>Void elements</strong> are elements that cannot have any content and only have a start tag. Elements include <code>img</code> and <code>meta</code>. It is common to see some codebases that include a forward slash <code>/</code> inside the void elements. Both versions are acceptable:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {voidElements}
                </SyntaxHighlighter>
            </div>

            <p>HTML specs say that the presence of the <code>/</code> <em>does not mark the start tag as self-closing but instead is unnecessary and has no effect of any kind</em>. For this stage in your journey, learn to identify and implement both ways.</p>

            <h2>Images</h2>

            <p>To display an image, you will need to include a couple of attributes inside your image element. An <strong>attribute</strong> is a special value used to adjust the behavior for an HTML element. Let's implement an image element with a couple of attributes:</p>

            <IDE
                HTMLStart={monaLisaCat}
            />

            <p>The <code>src</code> attribute is used to specify the location for that image. The <code>alt</code> attribute is used to provide short, descriptive text for the images.</p>

            <p>There are three tools to consider when using images (or media for that matter) on your web pages: the size, the format, and the compression.</p>

            <h3>Size</h3>
            <p>When building a website, you will often style images to display in a specific size. For example, you might have an area on your website for an image with its display at a 640x480 (width by height) resolution. If you serve an image that is larger, say 1920x1080, and scaling down to match the area it will fit in, you are actually requiring your users to download unnecessary data. A smaller resolution results in a smaller file size.</p>

            <h3>Format</h3>
            <p>Two of the most common file formats are PNG and JPG, but these are no longer the most ideal formats for serving images. Unless you need support for older browsers, you should consider using a more optimized format like WEBP or AVIF.</p>

            <h3>Compression</h3>
            <p>You can run compression algorithms on your images. A <em>compression algorithm</em> is used to reduce the size for files or data. There are plenty of free tools that can do this online for you. However, it is worth noting that specific file formats like JPG are not <em>lossless</em>. <strong>Lossless</strong> means that the original data can be perfectly reconstructed from the compressed data. So compressing a JPG image will result in a degraded quality.</p>

            <h2>Deeper dive into Attributes</h2>

            <p>An attribute is a value placed inside the opening tag of an HTML element. Attributes provide additional information about the element or specify how the element should behave.</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {attributeExample}
                </SyntaxHighlighter>
            </div>

            <p>The attribute name is followed by an equal sign (<code>=</code>) and a value in quotes. The value can be a string or a number, depending on the attribute. Let's take a look at an example of the element <code>href</code>, used to specify the URL of a link:</p>

            <IDE
                HTMLStart={linkExample}
            />

            <p>Without this attribute, the link would not work because there would be no destination URL. So you must include the <code>href</code> attribute to make the link functional. Certain elements <em>require</em> certain attributes. In the last section, the <code>src</code> attribute is a must for the <code>img</code> element, as it specifies the image file that is being displayed.</p>

            <p>Some attributes are a little unique with their syntax, like the <code>checked</code> attribute shown here:</p>

            <IDE
                HTMLStart={inputExample}
            />

            <p>Here we have an <code>input</code> element with the <code>type</code> attribute set to <code>checkbox</code>. <strong>Inputs</strong> are used to collect data from users, and the <code>type</code> attribute specifies the type of input (more on inputs later).</p>

            <p>We also have the attribute, <code>checked</code>, which is used to specify that the checkbox should be checked by default. <code>checked</code> does not require a value. If it is present, the checkbox will be checked by default. If the attribute is not present, the checkbox will be unchecked. This is known as a <em>boolean attribute</em>.</p>

            <p>A <strong>boolean attribute</strong> is an attribute that can either be present or absent in an HTML tag. If present the value is true, if not the value is false. Examples of common boolean attributes include <code>disabled</code>, <code>readonly</code>, and <code>required</code>. These attributes are used to specify the <em>state</em> of an element. There are many that can be used to customize the behavior and appearance of elements on a webpage.</p>

            <h2>SVGs</h2>

            <p>Common image formats like PNG and JPG are classified as raster formats. This means that they are <em>pixel-based</em>, with the data tracking the color value in each pixel.</p>

            <p>A large downside of raster based images is that do not upscale well. If you have ever tried to make a PNG larger, you may have seen that it becomes pixelated or blurry.</p>

            <p>An <strong>SVG</strong> (scalable vector graphic) is a different kind of image. A vector graphic tracks data based on paths and equations to plot points, lines, and curves. What this really means is that a vector graphic can be scaled to any size without an impact on its quality.</p>

            <p>SVGs specifically have the added benefit of storing data in <em>XML</em>. This means you can use them directly in your code as raw HTML with the <code>svg</code> element. It also means you can programmatically change the color of the image.</p>

            <IDE
                HTMLStart={smiles}
            />

            <ul>
                <li><code>svg</code> element: the container for the whole drawing. It sets up the space where all the shapes appear. Everything you want to draw with SVG, such as circles, lines, or paths, goes inside the <code>svg</code> element.</li>
                <li><code>circle</code> element: used to make the face and the eyes. One large circle forms the yellow face, and two smaller circles make the eyes.</li>
                <li><code>path</code> element: used to draw the smile. It creates a curved line for the mouth.</li>
                <li>Each SVG element has attributes that control its appearance and position within the drawing area.</li>
            </ul>

            <p>Here are some more fun examples:</p>

            <IDE
                HTMLStart={icons}
            />

            <p>SVG images are great for specific instances such as building icons, custom bullet points or webpage logos. One of the most popular icon libraries, Font Awesome, uses SVG images for their icons. The scaling factor allows you to adapt your layout to any responsive design you need.</p>

            <h2>Multimedia Integration</h2>

            <p>The <code>audio</code> and <code>video</code> elements allow you to add sound and video content to your HTML documents. The <code>audio</code> element supports popular audio formats like mp3, wav, and ogg. The <code>video</code> element supports mp4, ogg, and webm formats. If you want to see the audio player on the page, then you can add the <code>audio</code> element with the <code>controls</code> attribute:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {audioExample}
                </SyntaxHighlighter>
            </div>

            <p>The <code>controls</code> attribute enables users to manage audio playback, including adjusting volume, and pausing, or resuming playback. The <code>controls</code> attribute is a boolean attribute that can be added to an element to enable built-in playback controls. If omitted, no controls will be shown.</p>

            <ul>
                <li><strong><code>loop</code> attribute:</strong> the <code>loop</code> attribute is a boolean attribute that makes the audio replay continuously.</li>
                <li><strong><code>muted</code> attribute:</strong> the <code>muted</code> boolean attribute will start the audio in a muted state.</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {audioWithAttributes}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><strong><code>source</code> element:</strong> when it comes to audio file types, there are differences in which browsers support which type. To accommodate this, you can use <code>source</code> elements inside the <code>audio</code> element and the browser will select the first source that it understands.</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {audioControls}
                </SyntaxHighlighter>
            </div>

            <p>All the attributes we have learned so far are also supported in the <code>video</code> element.</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {video}
                </SyntaxHighlighter>
            </div>


            <ul>
                <li><strong><code>poster</code> attribute:</strong> if you wanted to display an image while the video is downloading, you can use the <code>poster</code> attribute. This attribute is not available for <code>audio</code> elements and is unique to the <code>video</code> element.</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {videoWithAttributes}
                </SyntaxHighlighter>
            </div>


        </div>
    )
}