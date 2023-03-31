import React from "react";


type InitialStateType = {
    value: number
    startValue: number
    maxValue: number
}

// type ActionType = ReturnType<typeof incAC> | ReturnType<typeof resetAC> | ReturnType<typeof startValueAC>

// type ActionType = {
//     type: string
//     newStartValue: number
//     newMaxValue: number
// }

type ActionType = any


export const  counterReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
    switch (action.type){
        case "INC":
            return {...state, value: state.value + 1}

        case "RESET":
            return {...state, value: state.startValue}

        case "NEW_START":
            return {...state, startValue: action.newStartValue}

        case "NEW_MAX":
            return {...state, maxValue: action.newMaxValue}

        default:
            throw new Error("I don't understand this action type")
    }
}



export const incAC = () => {
    return {type: "INC"}
}

export const resetAC = () => {
    return {type: "RESET"}
}

export const startValueAC = (newValue: number) => {
    return {
        type: "NEW_START",
        newStartValue: newValue
    } as const
}

export const maxValueAC = (newValue: number) => {
    return {
        type: "MAX_START",
        newMaxValue: newValue
    }
}