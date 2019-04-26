import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../actions';
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import MinusBtn from '../components/MinusBtn';
import ClearBtn from '../components/ClearBtn';
import EqualBtn from '../components/EqualBtn';
import Result from '../components/Result';

class CalculatorContainer extends Component {
    render() {
        // connectによって渡された calculator と actions を取得する
        const { calculator, actions } = this.props;
        return (
            <div>
                <Result result={ calculator.showingResult ? calculator.resultValue : calculator.inputValue }/>
                <div>
                    <NumBtn n={ 1 } onClick={ () => actions.onNumClick(1) }/>
                    <NumBtn n={ 2 } onClick={ () => actions.onNumClick(2) }/>
                    <NumBtn n={ 3 } onClick={ () => actions.onNumClick(3) }/>
                </div>
                <div>
                    <NumBtn n={ 4 } onClick={ () => actions.onNumClick(4) }/>
                    <NumBtn n={ 5 } onClick={ () => actions.onNumClick(5) }/>
                    <NumBtn n={ 6 } onClick={ () => actions.onNumClick(6) }/>
                </div>
                <div>
                    <NumBtn n={ 7 } onClick={ () => actions.onNumClick(7) }/>
                    <NumBtn n={ 8 } onClick={ () => actions.onNumClick(8) }/>
                    <NumBtn n={ 9 } onClick={ () => actions.onNumClick(9) }/>
                </div>
                <div>
                    <NumBtn n={ 0 } onClick={ () => actions.onNumClick(0) }/>
                    <PlusBtn onClick={ actions.onPlusClick }/>
                    <MinusBtn onClick={ actions.onMinusClick }/>
                </div>
                <div>
                    <ClearBtn onClick={ actions.onClearClick }/>
                    <EqualBtn onClick={ actions.onEqualClick }/>
                </div>
            </div>
        );
    }
}

// Connect to Redux
/**
 * componentに渡すpropsを制御する
 *
 * この関数は第一引数はstore.getState()の結果を第一引数に、このContainer componentへ渡されたpropsを第二引数にして呼び出され、
 * これらのstateとpropsを使って子のPresentational componentにpropsとして渡す値を生成する
 * 第一引数「state」はreduxで管理している全てのstateを持っている
 * 第二引数「props」はconnectしたcomponent本来のpropsを取得する
 * connectしたcomponentで「this.props.hoge」とアクセスすることでreducerで管理している「hoge」の値を取得できる
 *
 * @param state store.getState()の結果
 * @param props このcomponentに渡されたprops（Reactでも使用できるもの）
 */
export const mapStateToProps = (state, props) => ({
    calculator: state.calculator
});

/**
 * reducerを呼び出して、reduxで管理しているstateを更新する
 *
 * この関数は，store.dispatchを第一引数にして呼び出される関数で、
 * dispatchを使って子のPresentational componentにpropsとして渡す関数を生成する
 *
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
    // action関数の自動追加
    actions: bindActionCreators(Actions, dispatch)
});

/**
 * 第一引数はcomponentに渡すpropsを制御する
 * 第二引数はreducerを呼び出して、reduxで管理しているstateを更新する
 * CalculatorContainerは取得したデータをpropsとして扱いたいcomponentを指定する
 */
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
