import NavBar from '../components/NavBar'
import Functions from './python/Functions.jsx'
import Footer from '../components/Footer'
import Scope from './python/Scope.jsx'
import TestingAndDebugging from './python/TestingAndDebugging.jsx'
import Computing from './python/Computing.jsx'
import Lists from './python/Lists.jsx'
import '../scripts/bootstrap'
import '../scripts/bootstrap.min.js'

export default function Python() {
    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">

                    <Functions />
                    <Scope />
                    <TestingAndDebugging />
                    <Computing />
                    <Lists />

                </div> {/* End of .container */}
            </main>

            <Footer />
        </>
    )
}