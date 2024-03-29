import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";



export const CounterDisplay = React.memo( () => {
    console.log("CounterDisplay is loaded")

    const displayClass = "notify"
    const message = useSelector<AppRootStateType, string>( state => state.counter.notify.message)
    const active = useSelector<AppRootStateType, boolean>( state => state.counter.notify.active)
    const  value = useSelector<AppRootStateType, number>( state => state.counter.value)


    return(
        <div className={"displayWrap"}>
            <span className={displayClass}>{active ? message: value}</span>
        </div>
    )
})