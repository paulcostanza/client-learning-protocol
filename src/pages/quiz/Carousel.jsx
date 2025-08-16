import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const MAX_VISIBILITY = 3

export default function Carousel({ children }) {
    const [active, setActive] = useState(1)
    const count = React.Children.count(children)

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (active < count - 1) setActive(active + 1)
        },
        onSwipedRight: () => {
            if (active > 0) setActive(active - 1)
        },
        trackMouse: true
    })


    return (
        <div className='carousel-parent' {...handlers}>
            <div className='carousel'>
                {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}>
                    <ArrowCircleLeftIcon
                        fontSize='large'
                        sx={{ color: '#212529' }}
                    />
                </button>}
                {React.Children.map(children, (child, i) => (
                    <div className='card-container' style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointer-events': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    }}>
                        {child}
                    </div>
                ))}
                {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}>
                    <ArrowCircleRightIcon
                        fontSize='large'
                        sx={{ color: '#212529' }}
                    />
                </button>}
            </div>
        </div>

    )
}