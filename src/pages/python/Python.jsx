import Functions from './Functions.jsx'
import Scope from './Scope.jsx'
import TestingAndDebugging from './TestingAndDebugging.jsx'
import Computing from './Computing.jsx'
import Lists from './Lists.jsx'
import Dictionaries from './Dictionaries.jsx'

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