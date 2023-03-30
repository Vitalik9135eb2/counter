import React, {useCallback, useEffect, useState} from 'react';
import {CounterDisplay} from "./CounterDisplay";
import {Btn} from "./Btn";


type CounterPropsType={
    counterValue: number
    startValue: number
    notify: string | null
    setCounterValue: (counter: number) => void
    maxValue:number
    disabled: boolean
}

export const Counter = React.memo( (props:CounterPropsType) => {
    console.log("Counter is loaded")

    const btnIncHandler = useCallback(() =>{
        props.setCounterValue(props.counterValue +1)
    },[props.setCounterValue, props.counterValue])

    const btnResetHandler = useCallback( () =>{
        props.setCounterValue(props.startValue)
    },[props.startValue, props.setCounterValue])

    const forIncClass = props.notify || props.counterValue === props.maxValue
    const forResetClass = props.notify || props.counterValue === props.startValue

    const btnIncClassName =  forIncClass ? "disabled" : ""
    const btnResetClassName = forResetClass ? "disabled" : ""


    return (
        <div className={"counter"}>
            <CounterDisplay counter={props.counterValue}
                            notify={props.notify}
                            maxValue={props.maxValue}
                            disabled={props.disabled}
            />

            <div className={"btnWrap"}>
                <Btn callBack={btnIncHandler} name={"inc"} class={btnIncClassName}/>
                <Btn callBack={btnResetHandler} name={"reset"} class={btnResetClassName}/>
            </div>

        </div>
    );
});



