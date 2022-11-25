import React from "react";

type CounterDisplayPropsType ={
    counter: number
}

export const CounterDisplay = (props:CounterDisplayPropsType) => {

    const displayClass = props.counter === 5 ? "display" + " " + "red" : "display"

    return(
        <div className={"displayWrap"}>
            <span className={displayClass}>{props.counter}</span>
        </div>
    )
}