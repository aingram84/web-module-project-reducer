export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_C = "MEMORY_C";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_R = "MEMORY_R";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (number) => {
    return({type:CHANGE_OPERATION, payload:number});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memoryC = () => {
    return({type:MEMORY_C});
}

export const memoryPlus = () => {
    return({type:MEMORY_PLUS});
}

export const memoryR = () => {
    return({type:MEMORY_R});
}