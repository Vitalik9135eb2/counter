import React, {useCallback, useEffect, useMemo, useReducer, useState} from 'react';
import {CounterDisplay} from "./CounterDisplay";
import {Btn} from "./Btn";
import {incAC, resetAC} from "../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


export const Counter = React.memo(() => {
    console.log("Counter is loaded")

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const active = useSelector<AppRootStateType, boolean>(state => state.counter.notify.active)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(resetAC())
    }, [])

    const btnIncHandler = useCallback(() => {
        dispatch(incAC())
    }, [])

    const btnResetHandler = useCallback(() => {
        const action = resetAC()
        dispatch(action)
    }, [])


    return (
        <div className={"counter"}>
            <CounterDisplay/>

            <div className={"btnWrap"}>
                <Btn disabled={value === maxValue || active} callBack={btnIncHandler} name={"inc"}/>
                <Btn disabled={value === startValue || active} callBack={btnResetHandler} name={"reset"}/>
            </div>

        </div>
    );
});

