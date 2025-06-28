import Functions from './python/Functions.jsx'
import Scope from './python/Scope.jsx'
import TestingAndDebugging from './python/TestingAndDebugging.jsx'
import Computing from './python/Computing.jsx'
import Lists from './python/Lists.jsx'
import Dictionaries from './python/Dictionaries.jsx'
import '../scripts/bootstrap'
import '../scripts/bootstrap.min.js'

export default function Python() {
    return (
        <>
            <main>
                <div className="container" id="space-on-top-of-page">
                    <Functions />
                    <Scope />
                    <TestingAndDebugging />
                    <Computing />
                    <Lists />
                    <Dictionaries />
                </div> {/* End of .container */}
            </main>
        </>
    )
}