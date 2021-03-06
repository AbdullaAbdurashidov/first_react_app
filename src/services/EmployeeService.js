import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/employee"


class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + `/${employeeId}`);
    }

    updateEmployee(employee){
        return axios.put(EMPLOYEE_API_BASE_URL, employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + `?id=${id}`);
    }

}

export default new EmployeeService();