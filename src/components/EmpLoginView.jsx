import React from 'react';


class EmpLoginView extends React.Component {

    constructor (props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let username = document.getElementById('uname').value;
        let password = document.getElementById('pwd').value;

        if ((username === 'hruday@gmail.com') && (password === 'hruday123')) {
            this.props.loadEmployeeCallback();
        }
        else {
            alert('login failure. Please try again');
            document.getElementById('uname').value = "";
            document.getElementById('pwd').value = "";
        }

    }

    render() {
        return (
            <div className="login-page">
                <div className="col-md-3 col-md-offset-3 login-form">
                    <h2>Login Page</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group'}>
                            <label htmlFor="Username">First Name</label>
                            <input type="text" id='uname' className="form-control" name="Username" />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='pwd' className="form-control" name="password" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default EmpLoginView