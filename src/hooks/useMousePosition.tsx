import * as React from 'react';
import { useState, useEffect } from 'react';
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log('add effect', position.x);

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updatePosition)
        //  返回一个函数，函数里面写需要清除的副作用
        return () => {
            console.log('remove effect', position.x);
            document.removeEventListener('mousemove', updatePosition)
        }
    }, [])
    return position;
}

export default useMousePosition;