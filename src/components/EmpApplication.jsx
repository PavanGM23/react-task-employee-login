import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import EmpContainer from './EmpContainer';
import { employeeReducers } from './EmpContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ ...employeeReducers }),
    compose(applyMiddleware(sagaMiddleware)),
  );

class EmpApplication extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <EmpContainer />
            </Provider>
        );
    }
}

export default EmpApplication