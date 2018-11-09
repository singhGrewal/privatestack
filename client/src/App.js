// import React, { Component } from "react";
// import axios from "axios";
// import logo from "./logo.svg";

// import "./App.css";

// class App extends Component {
//   // state = {
//   //   response: ""
//   // };

//   componentDidMount() {
//     // this.callApi()
//     //   .then(res => this.setState({ response: res.express }))
//     //   .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch("/api/hello");
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   state = {
//     response: "",
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: ""
//   };
//   handleChange = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log("Form", this.state);
//     axios
//       .post("/api/users/register", this.state)
//       .then(res => console.log("res", res))
//       .catch(err => console.log("err", err));

//     // this.signUpL()
//     //   .then(res => console.log("aaa", res))
//     //   .catch(err => console.log("err", err));
//   };

//   signUpL = async () => {
//     const response = await fetch("/api/users/register");
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   render() {
//     return (
//       <div className="text-center">
//         <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="text-base">{this.state.response}</p>

//         <form className="white" onSubmit={this.handleSubmit}>
//           <h5 className="grey-text text-darken-3">Sign Up</h5>
//           <div className="input-field">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" onChange={this.handleChange} />
//           </div>
//           <div className="input-field">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" onChange={this.handleChange} />
//           </div>
//           <div className="input-field">
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" id="firstName" onChange={this.handleChange} />
//           </div>
//           <div className="input-field">
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" id="lastName" onChange={this.handleChange} />
//           </div>
//           <div className="input-field">
//             <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/dashboard";
// import ProjectDetails from "./components/project/ProjectDetails";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

// import CreateProject from "./components/project/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container lg mt-4">
          {/*<Navbar />*/}
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/login" component={Login} />

            {/* <Route path="/project/:id" component={SignUp} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={SignUp} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
