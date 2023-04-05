import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {Btn} from "../Counter/Btn";
import {useDispatch, useSelector} from "react-redux";
import {maxValueAC, notifyAC, resetAC, startValueAC} from "../state/counter-reducer";
import {AppRootStateType} from "../state/store";
import {InputWithLabel} from "./InputWithLabel";



export const SettingCounter = React.memo( () => {
    console.log("SettingCounter is loaded")

    const active = useSelector<AppRootStateType, boolean>(state => state.counter.notify.active)
    const startValue = useSelector<AppRootStateType, number>( state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>( state => state.counter.maxValue)

    const dispatch = useDispatch()

    const [temporaryStartValue, setTemporaryStartValue] = useState<number>(startValue)
    const [temporaryMaxValue, setTemporaryMaxValue] = useState<number>(maxValue)


    const btnSetHandler = useCallback(() => {
        dispatch(startValueAC(temporaryStartValue))
        dispatch(maxValueAC(temporaryMaxValue))

        if(temporaryStartValue <= 0){
            dispatch(notifyAC(true, "Start not < 0"))

        } else if(temporaryStartValue === temporaryMaxValue){
            dispatch(notifyAC(true, "Start != Max"))

        } else if(temporaryStartValue > temporaryMaxValue){
            dispatch(notifyAC(true, "Start not > Max"))
        }
        else {
            dispatch(notifyAC(false, ""))
            dispatch(resetAC())
        }

        // localStorage.setItem("start", JSON.stringify(props.startValue))
        // localStorage.setItem("max", JSON.stringify(props.maxValue))

    }, [temporaryStartValue, temporaryMaxValue])

    const onChangeStartValueHandler = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryStartValue(parseInt(e.currentTarget.value))
        dispatch(notifyAC(true, "Set the value and press 'OK'"))
    }, [temporaryStartValue])

    const onChangeMaxValueHandler = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryMaxValue(parseInt(e.currentTarget.value))
        dispatch(notifyAC(true, "Set the value and press 'OK'"))
    },[temporaryMaxValue])

    return (
        <div className={"counter"}>

            <InputWithLabel label={"Start value"} value={temporaryStartValue} callback={onChangeStartValueHandler} type={"number"}/>
            <InputWithLabel label={"Max value"} value={temporaryMaxValue} callback={onChangeMaxValueHandler} type={"number"}/>

             <Btn disabled={!active} callBack={btnSetHandler} name={"OK"}/>

        </div>
    );
});
