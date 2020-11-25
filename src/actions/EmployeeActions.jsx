import * as actionTypes from './ActionTypes';


export function getInitialViewData(){
    return {
        type: actionTypes.INITIAL_LOAD
    };
}

export function loadEmployeeList(){
  return {
      type: actionTypes.LOAD_EMPLOYEE_LIST
  };
}
