import { AiOutlineSetting, AiOutlineFullscreen } from 'react-icons/ai';

export default function Playground() {
    return (
        <div className='playgroundnav'>

            {/* Files */}
            <div className='playgroundnav-files'>
                <button className='playgroundnav-file'>main.py</button>
                <button className='playgroundnav-file'>test.py</button>
            </div>

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

    SETTINGS: saved to local storage
    - reset split bars (moving them should be saved in local storage)
    - wrap code on/off
    - font size
    
    
    
    */}