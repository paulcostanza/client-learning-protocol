import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import VirtualMachineArchitecture from '../../../assets/docker/intro/virtual machine architecture.png'
import ContainerArchitecture from '../../../assets/docker/intro/container architecture.png'
import AppsOsHardware from '../../../assets/docker/intro/apps os hardware.png'
import VmVsContainer from '../../../assets/docker/intro/vm vs container.png'

export default function Intro() {
    const quizImports = {
        docker: () => import('../../../pages/quiz/database/DockerQuestions.js')
    }

    return (
        <div className="container">
            <h1>Intro</h1>

            <p>Docker is the big name in <em>containerization</em>. Containers allow us to package our programs <em>with an environment</em> and ship the whole thing. Most real world programs do not work in isolation, as they need...</p>

            <ul>
                <li>files from disk</li>
                <li>environment variables</li>
                <li>installed dependencies</li>
                <li>specific permissions</li>
            </ul>

            <p>Docker images and containers have become a standard for deploying applications.</p>

            <blockquote>
                <p>So, what is it?</p>
            </blockquote>

            <p>Docker allows us to deploy our applications inside of <em>containers</em>, which act as a very lightweight virtual machine. You can create UIs, CLIs, APIs, and security that work together inside of containers. So instead of just shipping an application, we can ship an application <em>with</em> the environment it runs in.</p>

            <h2>Container</h2>

            <p>A <strong>container</strong> is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.</p>

            <p>Traditionally the tech world used virtual machines. The issue however, is that they are really slow, and booting one up usually takes longer than a physical machine.</p>

            <p>Containers, on the other hand, give us 90% of the benefits of virtual machines, but are super lightweight. Containers boot up in seconds, while virtual machines can take minutes.</p>

            <p>Virtual machine architecture:</p>

            <img className="img-in-reading" src={VirtualMachineArchitecture} alt="virtual machine architecture" />

            <p>Container architecture:</p>

            <img className="img-in-reading" src={ContainerArchitecture} alt="container architecture" />

            <blockquote>
                <p>So why are they so lightweight?</p>
            </blockquote>

            <p>Virtual machines virtualize <em>hardware</em>. They emulate what a physical computer does at a low level. Containers virtualize at the <em>operating system</em> level. Isolation between containers that are running on the same machine is still <em>really good</em>. For the most part, each container feels like it has its own operating system and filesystem. In reality however, a lot of resources are being shared, but they are being shared securely through <strong>namespaces</strong>.</p>

            <p>Computers need hardware to operate (CPU, RAM, disk, etc.). On top of the hardware, we install operating systems. The OS interfaces with the hardware and handle task on behalf of the applications that it runs.</p>

            <img className="img-in-reading" src={AppsOsHardware} alt="how apps, os, & hardware interact" />

            <p>This situation works great on a local machine. The apps can talk to each other and work together if need be, like if you needed to share files between google cloud and photoshop, it is easy for the apps to work together.</p>

            <p>Containers can provide the seperating by sharing the host operating system. They avoid the over-head of full operating system instances.</p>

            <img className="img-in-reading" src={VmVsContainer} alt="vm vs container" />

            <h2>Images</h2>

            <p><strong>Images</strong> are a read-only definition of a container, while the <strong>container</strong> is an instance of a virtualized read-write environment.</p>

            <p>A container is basically an image that is <em>actively running</em>. Basically, you can boot up a container from an image. You can create multiple separate containers all from the same image (think the relationship between classes and objects).</p>

            <h2>Run a container</h2>

            <p>The <code>docker run</code> command starts a new container from an image:</p>

            <code>docker run -d -p hostport:containerport namespace/name:tag</code>

            <ul>
                <li><code>-d</code>: run in detached mode, so it does not block your terminal</li>
                <li><code>-p</code>: publish a container's port to the host, this is called <em>forwarding</em></li>
                <li><code>hostport</code>: the port on your local machine</li>
                <li><code>namespace/name</code>: the name of the image, usually in the format <code>username/repo</code></li>
                <li><code>tag</code>: the version of the image, often <code>latest</code></li>
            </ul>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro"
            />
        </div>
    )
}