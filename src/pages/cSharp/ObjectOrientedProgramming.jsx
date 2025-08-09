import Latex from 'react-latex'

import classes_101 from '../../assets/cSharp/classes-101.png'
import namespace from '../../assets/cSharp/namespace.png'
import assembly from '../../assets/cSharp/assembly.png'
import application from '../../assets/cSharp/application.png'

export default function ObjectOrientedProgramming() {

    return (
        <>
            <h1>Object Oriented Programming</h1>
            <br />
            <h2 id="architecture-of-net-applicatons">Architecture of .NET Applications</h2>
            <p>At a high level, when you build a C# application, your application consists of building blocks called <em>classes</em>. These classes collaborate with each other at run time and as a result the application provides
                some functionality.
            </p>

            <p><img className="img-in-reading" src={classes_101} alt="classes 101" /></p>

            <p>Data represents the <em>state</em> of the application.</p>
            <h5 class="center-text"><em>data<Latex>$ \Longleftrightarrow $</Latex> attributes</em></h5>
            <h5 class="center-text"><em>methods<Latex>$ \Longleftrightarrow $</Latex> functions</em></h5>

            <p>In a real-world application you can have hundreds, or even thousands of classes, each responsible for a piece of
                functionality.</p>
            <p>As the number of classes within an application grows, we need a way to organize these classes. Enter, <strong>namespace</strong>.
            </p>

            <p><img className="img-in-reading" src={namespace} alt="namespace" /></p>

            <p>A namespace is a container for related classes. We can have namespaces for working with data like databases, one for
                graphics and images, one for security, etc. As these namespaces grow we need a different way of partitioning an
                application. This is where we use an <strong>assembly</strong>.</p>

            <p><img className="img-in-reading" src={assembly} alt="assembly" /></p>

            <p>An assembly is a container for related namespaces. Physically it is a file on the disk which can either be an
                executable or a DLL (<strong>Dynamically linked library</strong>). When you compile an application the compiler
                builds one or more assemblies depending on how you partition your code.</p>

            <img className="img-in-reading" src={application} alt="applications" />

            <h4 id="review">Review</h4>
            <p>It helps to think of it like this:</p>
            <ul>
                <li>namespace is a folder</li>
                <li>assembly is a <code>.exe</code> or <code>.dll</code> file</li>
                <li>class is a blueprint for an object</li>
            </ul>

            <div className="container accordion">
                {/* Question #4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionFour" aria-expanded="false" aria-controls="questionFour">
                            <div>
                                <strong>True or False:</strong> A namespace in C# is used to organize related assemblies.
                            </div>

                        </button>
                    </h2>
                    <div id="questionFour" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            Answer: False
                            <br />
                            Namespace is used to organize related classes, interfaces, structs, and enums within an assembly, but not the assemblies themselves.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}