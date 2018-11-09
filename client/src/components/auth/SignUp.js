import React, {Component} from "react";
import {connect} from "react-redux";
import {register} from "../../store/action/authAction"

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    console.log("handleSubmit")
    e.preventDefault();
    console.log("log", this.state)
    this.props.dispatch(register(this.state));

  };

  render() {
    // const {authError, auth} = this.props;
    return (
      <div className="container justify-center flex">
        <div className="w-full max-w-md mt-10">
          <h5 className="m-4 text-center">Sign Up</h5>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstName">First Name </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="firstName" type="text" placeholder="First Name" onChange={this.handleChange}/>
            </div>

            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">Last Name </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}/>
            </div>

            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="text" placeholder="Email" onChange={this.handleChange}/>
            </div>

            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************" onChange={this.handleChange}/>
              <p className="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="input-field">
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign
                  Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(SignUp);