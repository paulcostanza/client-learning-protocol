import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'
import { TiStarOutline } from 'react-icons/ti'

export default function ProblemDescription() {
    return (
        <div >

            {/* Tabs */}
            <div className='problem-description-header'>
                <button className='problem-description-header-btn'>Description</button>
                <button className='problem-description-header-btn'>Study Guide</button>
                <button className='problem-description-header-btn'>Comments</button>
                <button className='problem-description-header-btn'>Playlist</button>
            </div>

            <div style={{ margin: '20px' }}>

                {/* Problem heading */}
                <div>
                    <div>1. Hello World</div>
                </div>

                {/* HEADER BAR - status, like, dislike, & save */}
                {/* Add after database connection */}
                {/* <div className='header-bar'>

                    <div className=''>
                        <BsCheck2Circle />
                    </div>
                    <div className='clickable'>
                        <AiFillLike />
                        <span className='buffer-space'>120</span>
                    </div>
                    <div className='clickable'>
                        <AiFillDislike />
                        <span className='buffer-space'>2</span>
                    </div>
                    <div className='clickable'>
                        <TiStarOutline />
                    </div>
                </div> */}

                {/* Problem Statement(paragraphs) */}
                <div className='problem-statements'>
                    <p className=''>Print the phrase <code>Hello world!</code> to the console.</p>
                </div>

                {/* Examples */}
                <div className='examples'>
                    {/* Example #1 */}
                    <div>
                        <p className='font-medium'>Example #1: </p>
                        <div className='example-card'>
                            <pre>
                                <strong className=''>Input: </strong> nums= [2, 7, 11, 15], target = 9{" "}
                                <br />
                                <strong>Output:</strong> [0, 1] <br />
                                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1]
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Constraints */}
                <div className='constraints'>
                    <div className='text-sm font-medium'>Constraints:</div>
                    <ul className='ml-5 list-disc'>
                        <li className='mt-2'>No <code>return</code> statement</li>
                        <li className='mt-2'>No unnecessary spaces or extra characters</li>
                        <li className='mt-2'>Watch for capital letter(s)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}