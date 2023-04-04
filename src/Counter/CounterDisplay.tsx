import React from "react";
import {InitialStateType} from "../state/counter-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

type CounterDisplayPropsType ={
    // counter: InitialStateType
}

export const CounterDisplay = React.memo( (props:CounterDisplayPropsType) => {
    console.log("CounterDisplay is loaded")

    const displayClass = "notify"
    const message = useSelector<AppRootStateType, string>( state => state.counter.notify.message)
    const active = useSelector<AppRootStateType, boolean>( state => state.counter.notify.active)
    const  value = useSelector<AppRootStateType, number>( state => state.counter.value)


    const display = <span className={displayClass}>{active ? message: value}</span>

    return(
        <div className={"displayWrap"}>
            {display}
        </div>
    )
})