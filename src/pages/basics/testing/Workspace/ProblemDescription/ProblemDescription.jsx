import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'
import { TiStarOutline } from 'react-icons/ti'

export default function ProblemDescription() {
    return (
        <div >

            {/* Tabs */}
            <div className={{ margin: '20px' }}>
                Description
            </div>

            <div style={{ margin: '20px' }}>

                {/* Problem heading */}
                <div>
                    <div>1. Hello World</div>
                </div>
                <div className='header-bar'>

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
                </div>

                {/* Problem Statement(paragraphs) */}
                <div className=''>
                    <p class=''>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to</em> <code>target</code>.</p>

                    <p class=''>You may assume that each input would have < strong>exactly one solution</strong>, and you may not use the same element twice.</p>

                    <p class=''>You can return the answer in any order.</p>
                </div>

                {/* Examples */}
                <div className='mt-4'>
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
                <div className='my-5'>
                    <div className='text-sm font-medium'>Constraints:</div>
                    <ul className='ml-5 list-disc'>
                        <li class='mt-2'><code>Item #1</code> has stuff</li>
                        <li class='mt-2'><code>Item #2</code></li>
                        <li class='mt-2'><code>Item #3</code></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}