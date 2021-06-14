import * as React from 'react';
import { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log('add effect', position.x);

        const updatePosition = (e: MouseEvent) => {
            console.log('inner');
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updatePosition)
        //  返回一个函数，函数里面写需要清除的副作用
        return () => {
            console.log('remove effect', position.x);
            document.removeEventListener('click', updatePosition)
        }
    }, [])
    console.log('before render');

    return (
        <p>X:{position.x} Y:{position.y}</p>
    )
}

export default MouseTracker;