import ActionTypes from '../utils/ActionTypes';

/**
 * stateの初期値
 */
const initialAppState = {
    previous: ActionTypes.CLEAR,
    operator: ActionTypes.CLEAR,
    inputValue: 0,
    resultValue: 0,
    showingResult: true,
};

/**
 * 計算を行う
 * @param state
 * @returns {number|*|number|*}
 */
const equalFunc = state => {
    switch (state.operator) {
        case ActionTypes.PLUS:
            return state.resultValue + state.inputValue;
        case ActionTypes.MINUS:
            return state.resultValue - state.inputValue;
        default:
            return state.inputValue;
    }
};

/**
 * 現在の state と Action から、新しい state を生成する
 * action を受けて state を変更する
 *
 * @param state 新たなstate, 最初はStateを持たないので初期状態を割り当てる（initialAppState を割り当て）
 * @param action 実行されたアクション
 */
const calculator = (state = initialAppState, action) => {
    switch (action.type) {
        case ActionTypes.INPUT_NUMBER:
            return {
                previous: ActionTypes.INPUT_NUMBER,
                operator: state.operator,
                inputValue: state.previous === ActionTypes.INPUT_NUMBER ? state.inputValue * 10 + action.number : action.number,
                resultValue: state.resultValue,
                showingResult: false
            };
        case ActionTypes.PLUS:
            if (state.previous === ActionTypes.PLUS || state.previous === ActionTypes.MINUS) {
                return {
                    ...state,
                    previous: ActionTypes.PLUS,
                    operator: ActionTypes.PLUS
                };
            }
            return {
                previous: ActionTypes.PLUS,
                operator: ActionTypes.PLUS,
                inputValue: state.operator === ActionTypes.PLUS || state.operator === ActionTypes.MINUS ? 0 : state.inputValue,
                resultValue: equalFunc(state),
                showingResult: true
            };
        case ActionTypes.MINUS:
            if (state.previous === ActionTypes.PLUS || state.previous === ActionTypes.MINUS) {
                return {
                    ...state,
                    previous: ActionTypes.MINUS,
                    operator: ActionTypes.MINUS
                };
            }
            return {
                previous: ActionTypes.MINUS,
                operator: ActionTypes.MINUS,
                inputValue: state.operator === ActionTypes.PLUS || state.operator === ActionTypes.MINUS ? 0 : state.inputValue,
                resultValue: equalFunc(state),
                showingResult: true
            };
        case ActionTypes.CLEAR:
            return {
                previous: ActionTypes.CLEAR,
                operator: ActionTypes.CLEAR,
                inputValue: action.inputValue,
                resultValue: action.resultValue,
                showingResult: true
            };
        case ActionTypes.EQUAL:
            if (state.previous === ActionTypes.PLUS || state.previous === ActionTypes.MINUS) {
                return state;
            }
            return {
                previous: ActionTypes.EQUAL,
                operator: ActionTypes.EQUAL,
                inputValue: equalFunc(state),
                resultValue: equalFunc(state),
                showingResult: true
            };
        default:
            return state;
    }
};

export default calculator;
