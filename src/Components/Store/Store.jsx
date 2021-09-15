import { createStore } from "redux";

let initState = {
    rates: "",
    from: "",
    to: "",
    amount: 0,
    convertedAmount: 0
}

function reducer(prevState = initState, action) {
    if (action.type === "Rates") {
        return prevState = {
            rates: action.rates,
            from: "",
            to: "",
            amount: "",
            convertedAmount: ""
        }
    }
    else if (action.type === "conversion") {
        return prevState = {
            rates: action.rates,
            from: action.from,
            to: action.to,
            amount: action.amount,
            convertedAmount: action.convertedAmount
        }
    }
    return prevState
}

let store = createStore(reducer);

export default store