import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {
    const [counterValue, setCounterValue] = useState(0)



    return (
    <div className="App">
        <Counter
            counterValue={counterValue}
            setCounterValue={setCounterValue}
        />

    </div>
  );
}

export default App;
