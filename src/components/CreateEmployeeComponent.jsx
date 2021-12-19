import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    } 

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then((response)=>{
            this.props.history.push('/employees');
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First name </label>
                                        <input placeholder="enter ..." name="firstName" className="form-control" 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last name </label>
                                        <input placeholder="enter ..." name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Email </label>
                                        <input placeholder="enter ..." className="form-control" 
                                        value={this.state.email} name="email" onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}} >Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent
;