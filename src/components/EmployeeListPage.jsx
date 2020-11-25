import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class EmployeeListPage extends React.Component {


    render() {
        const { employeeData } = this.props;
        return (
            <div>
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">PhoneNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeData.map(user => (
                                <> < tr >
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNo}</td>
                                </tr></>

                            ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeListPage