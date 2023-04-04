import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {Btn} from "../Counter/Btn";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, maxValueAC, notifyAC, startValueAC} from "../state/counter-reducer";
import {AppRootStateType} from "../state/store";


// type SettingCounterPropsType = {
//     counterValue: InitialStateType
// }

// export const SettingCounter = (props: SettingCounterPropsType) => {
//     console.log("SettingCounter is loaded")
//     const dispatch = useDispatch()
//
//     const [temporaryStartValue, setTemporaryStartValue] = useState<number>(props.counterValue.startValue)
//     const [temporaryMaxValue, setTemporaryMaxValue] = useState<number>(props.counterValue.maxValue)
//
//
//
//     const btnClassName = " "
//
//     const inputSettingClass = ""
//     const btnSetHandler = useCallback(() => {
//         dispatch(startValueAC(temporaryStartValue))
//         dispatch(maxValueAC(temporaryMaxValue))
//
//         if(temporaryStartValue <= 0){
//             dispatch(notifyAC(true, "Not < 0"))
//         } else if(temporaryStartValue >= temporaryMaxValue){
//             dispatch(notifyAC(true, "Start not ==== Max"))
//         } else {
//             dispatch(notifyAC(false, ""))
//         }
//
//         // localStorage.setItem("start", JSON.stringify(props.startValue))
//         // localStorage.setItem("max", JSON.stringify(props.maxValue))
//
//     }, [temporaryStartValue, temporaryMaxValue])
//
//     const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setTemporaryStartValue(parseInt(e.currentTarget.value))
//         dispatch(notifyAC(true, "Set the value and press 'OK'"))
//     }
//
//     const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setTemporaryMaxValue(parseInt(e.currentTarget.value))
//         dispatch(notifyAC(true, "Set the value and press 'OK'"))
//     }
//
//     return (
//         <div className={"counter"}>
//             <div>
//                 <span>Start Value</span>
//                 <input className={inputSettingClass} value={temporaryStartValue} onChange={onChangeStartValueHandler}
//                        type="number"/>
//             </div>
//
//             <div>
//                 <span>Max Value</span>
//                 <input className={inputSettingClass} value={temporaryMaxValue} onChange={onChangeMaxValueHandler}
//                        type="number"/>
//             </div>
//
//             <Btn callBack={btnSetHandler} name={"OK"} class={btnClassName}/>
//
//         </div>
//     );
// };



export const SettingCounter = () => {
    console.log("SettingCounter is loaded")

    const counterValue = useSelector<AppRootStateType, InitialStateType>( state => state.counter)
    const dispatch = useDispatch()

    const [temporaryStartValue, setTemporaryStartValue] = useState<number>(counterValue.startValue)
    const [temporaryMaxValue, setTemporaryMaxValue] = useState<number>(counterValue.maxValue)



    const btnClassName = " "

    const inputSettingClass = ""
    const btnSetHandler = useCallback(() => {
        dispatch(startValueAC(temporaryStartValue))
        dispatch(maxValueAC(temporaryMaxValue))

        if(temporaryStartValue <= 0){
            dispatch(notifyAC(true, "Not < 0"))
        } else if(temporaryStartValue >= temporaryMaxValue){
            dispatch(notifyAC(true, "Start not ==== Max"))
        } else {
            dispatch(notifyAC(false, ""))
        }

        // localStorage.setItem("start", JSON.stringify(props.startValue))
        // localStorage.setItem("max", JSON.stringify(props.maxValue))

    }, [temporaryStartValue, temporaryMaxValue])

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryStartValue(parseInt(e.currentTarget.value))
        dispatch(notifyAC(true, "Set the value and press 'OK'"))
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryMaxValue(parseInt(e.currentTarget.value))
        dispatch(notifyAC(true, "Set the value and press 'OK'"))
    }

    return (
        <div className={"counter"}>
            <div>
                <span>Start Value</span>
                <input className={inputSettingClass} value={temporaryStartValue} onChange={onChangeStartValueHandler}
                       type="number"/>
            </div>

            <div>
                <span>Max Value</span>
                <input className={inputSettingClass} value={temporaryMaxValue} onChange={onChangeMaxValueHandler}
                       type="number"/>
            </div>

            <Btn callBack={btnSetHandler} name={"OK"} class={btnClassName}/>

        </div>
    );
};
