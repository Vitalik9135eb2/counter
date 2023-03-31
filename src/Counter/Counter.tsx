import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {CounterDisplay} from "./CounterDisplay";
import {Btn} from "./Btn";
import {counterReducer, incAC, resetAC} from "../state/counter-reducer";




type CounterPropsType={
    // startValue: number
    // maxValue: number
    notify: string | null
    disabled: boolean
}

export const Counter = React.memo( (props:CounterPropsType) => {
    console.log("Counter is loaded")

    useEffect(()=>{
        dispatchCounterValue(resetAC())
    },[])

    const [counterValue, dispatchCounterValue] = useReducer(counterReducer,{
        value: 0,
        startValue: 2,
        maxValue: 8
    })

    const btnIncHandler = useCallback(() =>{
        dispatchCounterValue(incAC())
    },[])

    const btnResetHandler = useCallback( () =>{
        const action = resetAC()
        dispatchCounterValue(action)
    },[])


    const forIncClass = props.notify || counterValue.value === counterValue.maxValue
    const forResetClass = props.notify || counterValue.value === counterValue.startValue

    const btnIncClassName =  forIncClass ? "disabled" : ""
    const btnResetClassName = forResetClass ? "disabled" : ""


    return (
        <div className={"counter"}>
            <CounterDisplay counter={counterValue.value}
                            notify={props.notify}
                            maxValue={counterValue.maxValue}
                            disabled={props.disabled}
            />

            <div className={"btnWrap"}>
                <Btn callBack={btnIncHandler} name={"inc"} class={btnIncClassName}/>
                <Btn callBack={btnResetHandler} name={"reset"} class={btnResetClassName}/>
            </div>

        </div>
    );
});



