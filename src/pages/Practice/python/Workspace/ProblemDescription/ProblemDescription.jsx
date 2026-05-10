import ProblemDescriptionNav from './ProblemDescriptionNav'
import { useState, useEffect } from 'react'
import Description from './Tabs/Description'
import StudyGuide from './Tabs/StudyGuide'
import Playlist from './Tabs/Playlist'
import Solution from './Tabs/Solution'

export default function ProblemDescription({ problem, activeTab, setActiveTab }) {

    return (
        <div >
            <ProblemDescriptionNav
                questionId={problem.id}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className='problem-description-space'>
                {activeTab === 'description' && <Description problem={problem} />}
                {activeTab === 'study guide' && <StudyGuide problem={problem} />}
                {activeTab === 'playlist' && <Playlist />}
                {activeTab === 'solution' && <Solution />}
                {/* {activeTab === 'comments' && <Comments />} */}
            </div>
        </div>
    )
}