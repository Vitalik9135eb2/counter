import {incAC, resetAC, counterReducer, startValueAC, maxValueAC, notifyAC} from "./counter-reducer";


test("Increment counter value", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4,
        notify: {
            active: false,
            message: ""
        }
    }

    const action = incAC()
    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(startState.value + 1)
})

test("Reset counter value", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4,
        notify: {
            active: false,
            message: ""
        }
    }

    const action = resetAC()
    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(endState.startValue)
})

test("Set start counter value", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4,
        notify: {
            active: false,
            message: ""
        }
    }

    const endState = counterReducer(startState, startValueAC(5))

    expect(endState.startValue).toBe(5)
})

test("Set max value counter value", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4,
        notify: {
            active: false,
            message: ""
        }
    }

    const endState = counterReducer(startState, maxValueAC(5))

    expect(endState.maxValue).toBe(5)
})

test ("Set notify status", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4,
        notify: {
            active: false,
            message: ""
        }
    }


    const endState = counterReducer(startState, notifyAC(true, "Set the value and press 'OK'"))

    expect(endState.notify.active).toBe(true)
    expect(endState.notify.message).toBe("Set the value and press 'OK'")
})