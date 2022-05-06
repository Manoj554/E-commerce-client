import React, { useEffect, useState } from 'react'

const test = () => {

    const [time, setTime] = useState('');

    useEffect(() => {
        setTime(state => new Date().toString());
    }, [time]);

    return (
        <div>
            {/* Count IS {count}
            <button onClick={handleCount}>Click me</button> */}
            Time {time}
        </div>
    )
}

export default test