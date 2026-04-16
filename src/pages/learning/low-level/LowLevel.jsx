import { useState } from 'react'
import PrevNextSection from '../../components/PrevNextSection.jsx'
import SectionDrawer from '../../components/SideBarNav'
import ModalForQuestions from '../../pages/quiz/ModalForQuestions.jsx'

import VariableSize from './VariableSize.jsx'

const sectionComponents = {
    'Variable Size': (props) => <VariableSize {...props} />,
}

export default function LowLevel() {
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