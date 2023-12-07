import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_APPLY, MEMORY_PLUS, MEMORY_CLEAR } from './../actions';

export const initialState = {
    total: 100,
    operation: "+",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
        return ({
            ...state,
            total: 0,
            memory: 0,
            operation: '+'
        })
        
        case(MEMORY_APPLY):
        return ({
            ...state,
            memory: calculateResult(state.memory, state.total, state.operation)
        })

        case(MEMORY_CLEAR):
        return({
            ...state,
            memory: 0
        })

        case(MEMORY_PLUS):
        return({
            ...state,
            memory: calculateResult(state.memory, state.total, '+')
        })
            
        default:
            return state;
    }
}

export default reducer;