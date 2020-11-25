import * as actionTypes from '../actions/ActionTypes';
const employeeData = require('./EmployeeData');

const empReducer = (state = {
    employeeData: [],
    loginView: false

}, action) => {
    const newState = Object.assign({}, state);


    switch (action.type) {

        case actionTypes.INITIAL_LOAD:
            newState.loginView = true;
            return newState;

        case actionTypes.LOAD_EMPLOYEE_LIST:
            newState.loginView = false;
            newState.employeeData = employeeData.user;
            return newState;


        default:
            return state;
    }
};

export default empReducer;
