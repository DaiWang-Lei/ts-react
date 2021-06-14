import * as React from 'react';

interface IHello {
    message?: string;
}
const Hello: React.FC<IHello> = (props) => {
    return <h1>{props.message}</h1>
}
Hello.defaultProps = {
    message:'Hello ccccc'
}

export default Hello;