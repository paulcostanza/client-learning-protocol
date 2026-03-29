export default function ExceptionSafety() {
    return (
        <div className="container">
            <h1>Exception Safety</h1>

            <p><strong>Exception Safety</strong> in C++ refers to writing code that behaves correctly and predictably even when exceptions are thrown. The primary goal is to prevent resource leaks and maintain the program in a valid, usable state. This is achieved through specific design patterns and guarantees.</p>

            <h2>Key Concepts</h2>

            <p><strong>Resource Acquisition is Initialization (RAII)</strong> is the primary idiom for exception safety in C++. It ties the lifetime of a resource (like memory, file handles, or mutexes) to the lifetime of a local, stack-allocated object. When the object goes out of scope, its destructor is automatically called, regardless of whether the function exited normally or due to an exception, thus ensuring cleanup. Smart pointers like <code>std::unique_ptr</code> and <code>std::shared_ptr</code> are prime examples of RAII in practice.</p>

            <p><strong>Exception Specifications</strong> is known as the <code>noexcept</code> specifier. It is used to guarantee that a function will not throw an exception. This allows the compiler to make optimizations and helps the standard library provide stronger safety guarantees. If a function marked <code>noexcept</code> is thrown, the program terminates.</p>

            <p><strong>Destructors Must Not Throw</strong> exceptions is a fundamental rule. If a second exception is thrown while the stack is already unwinding due to a first exception, the program is immediately terminated via <code>std::terminate()</code>. The <code>noexcept</code> specifier helps enforce this at compile time.</p>

            <h2>Levels of exception safety</h2>

            <p>Code is generally classified into one of the four levels of exception safety guarantees.</p>

            <ol>
                <li><strong>No-throw Guarantee:</strong> <em>Failure Transparency.</em> The operation is guaranteed to always succeed and never throw an exception that propagates to the caller. This is the strongest guarantee and is expected of destructors, <code>swap</code> operations, and operations on fundamental types.</li>
                <li><strong>Strong Guarantee:</strong> <em>Commit-or-Rollback Semantics.</em> The operation either completes successfully or if an exception is thrown, leaves the program state exactly as it was before the operation began, as if it never ran. This <em>transactional</em> behavior is desirable but can sometimes be difficult or expensive to implement. The <code>copy-and-swap</code> idiom is a common technique to achieve this for assignment opperators.</li>
                <li><strong>Basic Guarantee:</strong> If an exception is thrown, no resources are leaked, and the objects involved are left in a valid, but otherwise unspecified, state. The program can continue to run, but the data might be modified to an unpredictable, though valid, state. This is the minimum level generally considered acceptable for robust code.</li>
                <li><strong>No Guarantee:</strong> <em>Exception Unsafe.</em> No guarantees are made about resource leaks or object state if an exception occurs. Such code can lead to undefined behavior or program termination if an exception propagates through it.</li>
            </ol>

            <h2>Exception safety guarantees review</h2>

            <p>A short, quick review.</p>

            <ul>
                <li>No-Throw Guarantee - Strongest. The operation will not throw any exceptions. Program will continue normally with no failure paths to handle. Things like destructors, <code>swap()</code>, and simple operations on primitive types.</li>
                <li>Strong Guarantee - Commit or Rollback. Operation either succeeds completely or will have no effect at all. There is no partial changes and state is eactly the same if failure occurs.</li>
                <li>Basic Guarantee - Minimum acceptable. If an exception occurs no resource is leaded and the object remains valid. However, state may be partially changed.</li>
                <li>No Guarantee - Exception is unsafe. Nothing is guaranteed if an exception occurs! Memory leaks, corrupted state, and undefined bahavior are all possible!</li>
            </ul>
        </div>
    )
}