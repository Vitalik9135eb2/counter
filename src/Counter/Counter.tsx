import React, {useEffect, useState} from 'react';
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

export const Counter = (props:CounterPropsType) => {

    const btnIncHandler = () =>{
        props.setCounterValue(props.counterValue +1)
    }

    const btnResetHandler = () =>{
        props.setCounterValue(props.startValue)
    }

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
};



