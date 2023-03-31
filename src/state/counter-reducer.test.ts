import {incAC, resetAC, counterReducer, startValueAC} from "./counter-reducer";


test("Increment counter value", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4
    }

    const action = incAC()
    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(startState.value + 1)
})

test("Reset counter value", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4
    }

    const action = resetAC()
    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(endState.startValue)
})


test("Set start counter value", () =>{
    const startState = {
        value: 0,
        startValue: 2,
        maxValue: 4
    }

    const endState = counterReducer(startState, startValueAC(5))

    expect(endState.startValue).toBe(5)
})

