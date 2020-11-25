import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmpLoginView from './EmpLoginView';
import EmployeeListPage from './EmployeeListPage';
import EmpReducer from '../reducers/EmpReducer';
import * as EmployeeActions from '../actions/EmployeeActions';

class EmpContainer extends React.Component {


    constructor(props) {
        super(props);
        this.props.employeeActions.getInitialViewData();
    }


    getContent() {
        const { loginView, employeeActions, employeeData } = this.props;

        if (loginView) {
            return <EmpLoginView loadEmployeeCallback={employeeActions.loadEmployeeList} />;
        }
        else {
            return <EmployeeListPage employeeData={employeeData} />
        }
    }

    render() {
        return (
            <div>
                {this.getContent()}
            </div>

        );

    }
}

const mapStateToProps = state => ({
    loginView: state.employeeReducerState.loginView,
    employeeData: state.employeeReducerState.employeeData
});

function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(EmployeeActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(EmpContainer);

const employeeReducers = Object.assign({}, { employeeReducerState: EmpReducer });

export { employeeReducers };
