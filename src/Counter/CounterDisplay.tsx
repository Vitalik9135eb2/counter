import React from "react";

type CounterDisplayPropsType ={
    counter: number
    notify: string | null
    maxValue: number
    disabled:boolean
}

export const CounterDisplay = React.memo( (props:CounterDisplayPropsType) => {
    console.log("CounterDisplay is loaded")


    const displayClass = `${"display"} ${props.disabled ? "error" : ''} 
                          ${props.notify && "notify"} 
                          ${props.counter === props.maxValue ? "red" : " "}`



    const display = <span className={displayClass}>{props.notify ? props.notify : props.counter}</span>

    return(
        <div className={"displayWrap"}>
            {display}
        </div>
    )
})