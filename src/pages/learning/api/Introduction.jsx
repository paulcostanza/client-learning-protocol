export default function Introduction() {
    return (
        <div className="contaner">
            <h1>Introduction</h1>

            <p>APis, or <strong>Application Programming Interfaces</strong>, play a key rolw in the software ecosystem. Apis serve as the <em>vital</em> middleman that enable different pieces of software to work together seamlessly.</p>

            <p>REST (<strong>Representational State Transfer</strong>) acts as one of the most popular architectures. It's simplistic, scalable, and can handle multiple types of calls, returns different data formats, and can even change structurally with the correct implementation.</p>

            <blockquote>
                <p>Cool! But so what?</p>
            </blockquote>

            <h2>REST APIs</h2>

            <p>REST is an architectural style that sets the standard for creating web services. A REST API, therefore, is a set of conventions and rules for building and interacting with those services.</p>

            <p>The key components that define this architectural style include:</p>

            <ul>
                <li><strong>Resources:</strong> in REST, you interact with resources, which are essentially objects like users, products, or orders, represented as URLs or endpoints.</li>
                <li><strong>HTTP Methods:</strong> These resources are manipulated using standard HTTP methods. <code>GET</code> for reading, <code>POST</code> for creating, <code>PUT</code> for updating, and <code>DELETE</code> for deleting.</li>
                <li><strong>Stateless Interactions:</strong> REST APIs operate on a <em>stateless basis</em>. Every API request from a client to a server must contain all the information needed to process the request. This is one of the reasons why REST APIs are so scalable.</li>
            </ul>

            <p>Simplicity, scalability, and versatility are some of the key reasons why this API protocol is so popular.</p>

            <p>To master REST APIs, you need to explore the depths of HTTP methods, status codes, API endpoints, and the intricacies of data manipulation and retrieval. It is more than just understanding the syntax; it's about grasping the architecture, the philosophy, and best practices that guide efficient API design and usage.</p>
        </div>
    )
}

// Challenges to eventually implement:

{/* 
    - conceptual questions about REST principles
    - coding tasks that require you to implement specific API calls
    - debugging exercises where you are given pieces of a RESTful service and asked to identify issues or optimize performance.
    - scenarios where you have to design RESTful routes and resources
    */}