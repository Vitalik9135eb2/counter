import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {InputNameType, SettingCounter} from "./SettingCounter/SettingCounter";

// function App() {
//
//     console.log("App is loaded")
//
//     const [counterValue, setCounterValue] = useState(0)
//
//     const [startValue, setStartValue] = useState(0)
//
//     const [maxValue, setMaxValue] = useState(10)
//
//     const [notify, setNotify] = useState<string | null>(null)
//
//     const [disabled, setDisabled] = useState(false)
//
//
//     // useEffect(() => {
//     //     let startLocalValue = localStorage.getItem("start")
//     //     let maxLocalValue = localStorage.getItem("max")
//     //     if(startLocalValue && maxLocalValue){
//     //         const newLocalStartValue = JSON.parse(startLocalValue)
//     //         const newLocalMaxValue = JSON.parse(maxLocalValue)
//     //         setCounterValue(newLocalStartValue)
//     //         setStartValue(newLocalStartValue)
//     //         setMaxValue(newLocalMaxValue)
//     //     }
//     //
//     //     }, [])
//
//
//     const showNotifySetDisabled = useCallback( (disabled:boolean,notify:string) => {
//         setDisabled(disabled)
//         setNotify(notify)
//     },[])
//
//     const errorCheck = useCallback( (value: number, inputName: InputNameType) => {
//
//         if(inputName === 'start' && value > maxValue || value === maxValue || value < 0){
//             showNotifySetDisabled(true,"Incorrect value")
//         } else if(inputName === 'max' && value < startValue || value === startValue || value < 0){
//             showNotifySetDisabled(true,"Incorrect value")
//         } else {
//             showNotifySetDisabled(false,"enter values and press 'set'")
//         }
//     },[])
//
//
//     return (
//     <div className="App">
//         <Counter
//             startValue={startValue}
//             counterValue={counterValue}
//             setCounterValue={setCounterValue}
//
//             maxValue={maxValue}
//             notify={notify}
//             disabled={disabled}
//         />
//
//         <SettingCounter
//             counterValue={counterValue}
//             setStartValue={setStartValue}
//             startValue={startValue}
//             setCounterValue={setCounterValue}
//             maxValue={maxValue}
//             setMaxValue={setMaxValue}
//             errorCheck={errorCheck}
//             disabled={disabled}
//             setNotify={setNotify}
//         />
//
//     </div>
//   );
// }

// export default App;
