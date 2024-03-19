import { useState } from 'react';

export default function App() {
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
    )
}