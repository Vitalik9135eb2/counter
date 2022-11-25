import React, {useEffect, useState} from 'react';
import {CounterDisplay} from "./CounterDisplay";
import {Btn} from "./Btn";


type CounterPropsType={
    counterValue: number
    setCounterValue: (counter: number) => void
}

export const Counter = (props:CounterPropsType) => {


    // useEffect(() => {
    //     let valueString = localStorage.getItem("counterValue")
    //     if(valueString){
    //         let newValue = JSON.parse(valueString)
    //         props.setCounter(newValue)
    //     }
    // }, [])

    //
    // useEffect(() => {
    //     setValueLocalStorage()
    // }, [props.counter])


    const btnIncHandler = () =>{
        props.setCounterValue(props.counterValue + 1)
    }

    const btnResetHandler = () =>{
        props.setCounterValue(0)
    }

    const btnIncClassName = props.counterValue === 5 ? "disabled" : ""
    const btnResetClassName = props.counterValue === 0 ? "disabled" : ""

    const setValueLocalStorage = () =>{
        // localStorage.setItem("counterValue", JSON.stringify(props.counter))
    }


    return (
        <div className={"counter"}>
            <CounterDisplay counter={props.counterValue}/>

            <div className={"btnWrap"}>
                <Btn callBack={btnIncHandler} name={"inc"} class={btnIncClassName}/>
                <Btn callBack={btnResetHandler} name={"reset"} class={btnResetClassName}/>
            </div>



        </div>
    );
};



