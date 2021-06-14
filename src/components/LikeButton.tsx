import React, { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition();
  useEffect(() => {
    console.log('uesEffect is running');

    document.title = `点击了${like}次`
  }, [like, on])
  return (
    <>
      <h2>X:{positions.x},Y:{positions.y}</h2>
      <button onClick={() => setLike(like + 1)}>
        {like}👍
      </button>
      <button onClick={() => setOn(!on)}>
        {on ? 'on' : 'off'}
      </button>
    </>
  )
}
export default LikeButton;