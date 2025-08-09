import Introduction from './Introduction'
import CSharpBasics from './CSharpBasics'
import ControlFlow from './ControlFlow'
import MethodsAndFunctions from './MethodsAndFunctions'
import ObjectOrientedProgramming from './ObjectOrientedProgramming'
import ExceptionHandlings from './ExceptionHandling'

export default function CSharp() {
    return (
        <>
            <main>
                <div className="container" id="space-on-top-of-page">
                    <Introduction />
                    <CSharpBasics />
                    <ControlFlow />
                    <MethodsAndFunctions />
                    <ObjectOrientedProgramming />
                    <ExceptionHandlings />
                </div>

                {/* Review section for now */}
                <div className="container accordion" id="this-question">
                </div >

            </main >
        </>
    )
}