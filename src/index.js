import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers'

const store = createStore(reducer);

render(
    // Provider：
    // Reactコンポーネント内でreact-reduxのconnect()関数を使えるようにし、
    // ラップしたコンポーネントにstore情報を渡す
    <Provider store={ store }>
        <CalculatorContainer/>
    </Provider>,
    document.getElementById('root')
);
