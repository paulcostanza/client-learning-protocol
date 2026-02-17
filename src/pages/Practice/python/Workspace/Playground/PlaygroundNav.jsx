import { AiOutlineSetting, AiOutlineFullscreen } from 'react-icons/ai';

export default function Playground() {
    return (
        <div className='playgroundnav'>

            {/* Files */}
            {/* <div className='playgroundnav-files'>
                <button className='playgroundnav-file'>main.py</button>
                <button className='playgroundnav-file'>test.py</button>
            </div> */}

            <div></div>
            {/* Butons */}
            <div className='playgroundnav-btns'>
                {/* Settings */}
                <div className='playgroundnav-btn'>
                    <AiOutlineSetting />
                </div>

                {/* Full Screen */}
                <div className='playgroundnav-btn'>
                    <AiOutlineFullscreen />
                </div>
            </div>
        </div>
    )
}

{/* 
    To add...

    REFRESH: add a button that starts your code over. Pop up a confurmation modal, 'Are you sure you want to reset your code in the workspace?'

    SETTINGS: saved to local storage
    - reset split bars (moving them should be saved in local storage)
    - wrap code on/off
    - font size
    - tab sizing: 2 spaces vs 4 spaces
    */}