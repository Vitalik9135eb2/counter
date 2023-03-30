import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {Btn} from "../Counter/Btn";


type SettingCounterPropsType={
    counterValue: number
    startValue: number
    setStartValue: (e:number) => void
    setCounterValue: (e:number) => void
    maxValue: number
    setMaxValue:(e:number) => void
    errorCheck: (value: number, inputName: InputNameType) => void
    disabled: boolean
    setNotify: (notify: string | null) => void
}

export type InputNameType = 'start' | 'max'

export const SettingCounter = (props:SettingCounterPropsType) => {

    console.log("SettingCounter is loaded")


    const btnClassName = props.disabled ? "disabled" : " "


    const inputSettingClass = `${"input"} ${props.disabled ? "error" : ''}`

    const btnSetHandler = useCallback( () => {
        props.setCounterValue(props.startValue)
        // localStorage.setItem("start", JSON.stringify(props.startValue))
        // localStorage.setItem("max", JSON.stringify(props.maxValue))
        props.setNotify(null)

    },[props.setCounterValue,props.startValue, props.setNotify])

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value)
        props.setStartValue(value)
        props.errorCheck(value, 'start')
    }

    const onChangeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value)
        props.setMaxValue(value)
        props.errorCheck(value, 'max')
    }

    return (
        <div className={"counter"}>
            <div>
                <span>Start Value</span>
                <input className={inputSettingClass} value={props.startValue} onChange={onChangeStartValueHandler}
                       type="number"/>
            </div>

            <div>
                <span>Max Value</span>
                <input className={inputSettingClass} value={props.maxValue} onChange={onChangeMaxValueHandler}
                       type="number"/>
            </div>

            <Btn callBack={btnSetHandler} name={"Set"} class={btnClassName}/>

        </div>
    );
};

