import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {

  return (
    <div>
        <Router>
            <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={EmployeeListComponent}></Route>
                        <Route path="/employees" component={EmployeeListComponent}></Route>
                        <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                        <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
                    </Switch>
                </div>
            <FooterComponent/>
        </Router>
        
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Hello Wrold !</h1>
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
  );
}

export default App;
