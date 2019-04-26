import ActionTypes from '../utils/ActionTypes';

const actionTypes = {
    onNumClick: (number) => ({
        type: ActionTypes.INPUT_NUMBER,
        number
    }),
    onPlusClick: () => ({
        type: ActionTypes.PLUS,
    }),
    onMinusClick: () => ({
        type: ActionTypes.MINUS,
    }),
    onClearClick: () => ({
        type: ActionTypes.CLEAR,
        inputValue: 0,
        resultValue: 0
    }),
    onEqualClick: () => ({
        type: ActionTypes.EQUAL,
    })
};

export default actionTypes;