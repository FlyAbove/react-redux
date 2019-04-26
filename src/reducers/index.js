import { combineReducers } from 'redux';
import calculator from './calculator';

/**
 * 複数のreducerを結合してエクスポートできる（今回は1つ）
 * @type {Reducer<any>}
 */
const reducer = combineReducers({
    calculator
});

export default reducer;
