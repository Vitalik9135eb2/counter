
type NotifyType = {
    active: boolean
    message: string
}

export type InitialStateType = {
    value: number
    startValue: number
    maxValue: number
    notify: NotifyType
}

type ActionType = any

const initialState: InitialStateType = {
    value: 0,
    startValue: 2,
    maxValue: 8,
    notify: {
        active: true,
        message: "Set the value and press 'OK'"
    }
}

export const  counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type){

        case "SET_STATUS_NOTIFY":
            return {...state, notify:{...state.notify, active: action.status, message: action.message }}

        case "INC":
            return {...state, value: state.value + 1}

        case "RESET":
            return {...state, value: state.startValue}

        case "NEW_START":
            return {...state, startValue: action.newStartValue}

        case "MAX_START":
            return {...state, maxValue: action.newMaxValue}

        default:
            return state
    }
}


export const notifyAC = (status:boolean, message: string) =>{
    return {
        type: "SET_STATUS_NOTIFY",
        status,
        message
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