import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function SimpleIntroToCCPP() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    return (
        <div>
            <h1>Introduction</h1>

            <h2>Before C++, there was C</h2>

            <p>Developed in 1972, C was primarily a systems programming language (a language to write operating systems with). For a high-level language, C gave the programmer a lot of control, while allowing developers to write a program that could be run on different platforms.</p>

            <h2>C++</h2>

            <p>Developed by <a href="https://www.stroustrup.com/" target="_blank">Bjarne Stroustrup</a>, C++ was built as an extension of C starting in 1979. It added many new features to the C language and can be though of as a superset of C (...sort of. There have been a few addition to C, causing a little bit of a divergence). C++'s most notable innovation over C is that is supports <em>object-oriented programming</em>. </p>

            <p>C++ was standardized in 1998 by the <a href="https://www.iso.org/technical-committees.html" target="_blank">ISO committee</a>. This means the ISO standards commitee approved a document (called a <strong>standards document</strong>) that provides a formal description of the C++ language. The goal of standardization is to help ensure that C++ code behaves consistently across different compilers and platforms.</p>

            <p>There have been numerous updates to the language, each adding additional functionality. <code>C++ 11</code> in particular added a huge number of new capabilities and is widely considered to be the new baseline version of the language.</p>

            <blockquote>
                Because the official name of the approved standards is complex (<code>C++ 20</code>'s formal name is <code>ISO/IEC 14882:2020</code>), standards are conventionally referred to by informal names, which include the last two digits of the year of publication. So <code>C++ 20</code> refers to the version of the language published in 2020.
            </blockquote>

            <h2>C and C++'s Philosophy</h2>

            <p>The underlying design philosophy of C and C++ can be summed up as <em>trust the programmer</em>, which is both wonderful and dangerous. C++ is designed to allow the programmer a high degree of freedom to do what they want. However, this also means the language often will not stop you from doing things that do not make sense, because it will assume you are doing so for some reason it does not understand. There are quite a few pitfalls that new programmers are likely to fall into if caught unaware. This is one of the primary reasons why knowing what you <em>should not</em> do in C/C++ is almost as import as knowing what you should do.</p>

            <h2>What is C++ good at?</h2>

            <p>C++ excels in situations where high performance and precise control over memory and other resources is needed. Here are a few types of applications that C++ would excel in:</p>

            <ul>
                <li>video games</li>
                <li>real-time systems (transportaion, manufacturing, etc)</li>
                <li>high-performance financial applications (like high frequency trading)</li>
                <li>graphical applications and simulations</li>
                <li>productivity/office applications</li>
                <li>embedded software</li>
                <li>audio and video processing</li>
                <li>artificial intelligence and neural networks</li>
            </ul>

            <p>C++ also has a large number of high-quality 3rd party libraries available, which can shorten development times significantly.</p>

            <h2>Should I start with C before C++?</h2>

            <p>Nope! It is perfectly fine to start with C++. Once you know C++, it should be pretty easy to learn standard C if you ever have the need. These days, C is mostly used for niche use cases: code that runs on embedded devices, when you need to interact with other languages that can only interface with C, etc.</p>

            <p>For most other cases, C++ is recommended.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="introduction"
            />
        </div>
    );
}