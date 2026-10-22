import { useState } from 'react'
import PrevNextSection from '../../../components/PrevNextSection.jsx'
import SectionDrawer from '../../../components/SideBarNav.jsx'
import ModalForQuestions from '../../quiz/ModalForQuestions.jsx'
import JavaIntro from './JavaIntro.jsx'
import JavaFundamentals from './JavaFundamentals.jsx'
import Methods from './Methods.jsx'
import Arrays from './Arrays.jsx'
import HashMaps from './HashMaps.jsx'

const sectionComponents = {
    'Intro to Java': (props) => <JavaIntro {...props} />,
    'Java Fundamentals': (props) => <JavaFundamentals {...props} />,
    'Methods': (props) => <Methods {...props} />,
    'Arrays': (props) => <Arrays {...props} />,
    'HashMaps': (props) => <HashMaps {...props} />,
}

export default function Java() {
    const menuItems = Object.keys(sectionComponents)
    const [selectedSection, setSelectedSection] = useState(menuItems[0])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [refresh, setRefresh] = useState(0)

    function handleRowClick(question) {
        setSelectedQuestion(question)
        setModalOpen(true)
    }

    function handleAnswered() {
        setRefresh(r => r + 1)
        setModalOpen(false)
    }
    return (
        <>
            <SectionDrawer
                menuItems={menuItems}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
            />
            <main>
                <div className="container" id="">
                    {sectionComponents[selectedSection]({
                        onRowClick: handleRowClick,
                        refresh,
                    })}

                    <ModalForQuestions
                        open={modalOpen}
                        onClose={() => setModalOpen(false)}
                        question={selectedQuestion}
                        onAnswered={handleAnswered}
                    />

                    <PrevNextSection
                        menuItems={menuItems}
                        selectedSection={selectedSection}
                        setSelectedSection={setSelectedSection}
                    />
                    <br />
                </div>
            </main>
        </>

    )
}