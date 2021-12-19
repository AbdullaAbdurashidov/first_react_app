import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);

    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    updateHandler(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((response=>{
            this.setState({employees: response.data});
        }))
    }

    deleteHandler(id){
        EmployeeService.deleteEmployee(id).then((response)=>{
            console.log(response.data);
            window.location.reload();
        })
            
    }

    render() {
        return (
            <div>
                <h2 className="text-center" >Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.email} </td>
                                        <td><button className="btn btn-warning" onClick={ () => this.updateHandler(employee.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={ () => this.deleteHandler(employee.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployeeListComponent;