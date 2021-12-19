import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
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

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {id: this.state.id,firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee);
        EmployeeService.createEmployee(employee).then((response)=>{
            this.props.history.push('/employees');
        })
    }

    componentDidMount(){
            EmployeeService.getEmployeeById(this.state.id).then((response)=>{
                let employee = response.data;
                this.setState({id: employee.id, firstName: employee.firstName, lastName: employee.lastName, email: employee.email})
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
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}} >Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;


