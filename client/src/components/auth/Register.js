import React, {Component} from "react";
import {connect} from "react-redux";
import {registerUser} from "../../store/action/authAction"

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    isDisabled: true
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
    this.props.dispatch(registerUser(this.state));
  };

  handleChangeValidate = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // console.log("handleChangeValidate e.target.name", e.target.name)
    // console.log("handleChangeValidate  e.target.value", e.target.value)
    // console.log("handleChangeValidate", this.setState)

    this.setState({
      [e.target.name]: e.target.value
    });

    // console.log("handleChangeValidate", this.setState)

    if (e.target.name === 'firstName') {
      console.log("firstName")
      if (e.target.value === '' || e.target.value === null) {
        this.setState({
          firstnameError: true
        })
      } else {
        this.setState({
          firstnameError: false,
          firstName: e.target.value
        })
      }
    }

    // if(e.target.name==='lastname'){
    //   if(e.target.value==='' || e.target.value===null){
    //     this.setState({
    //       lastnameError:true
    //     })
    //   } else {
    //     this.setState({
    //       lastnameError:false,
    //       lastName:e.target.value
    //     })
    //   }
    // }
    // if(e.target.name==='email'){
    //   this.validateEmail(e.target.value);
    // }
    // if(e.target.name==='password'){
    //   if(e.target.value==='' || e.target.value===null){
    //     this.setState({
    //       passwordError:true
    //     })
    //   } else {
    //     this.setState({
    //       passwordError:false,
    //       password:e.target.value
    //     })
    //   }
    // }
    // if(this.state.firstnameError===false && this.state.lastnameError===false &&
    //   this.state.emailError===false && this.state.passwordError===false){
    //   this.setState({
    //     isDisabled:false
    //   })
    // }
  }

  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email
      })
    } else {
      this.setState({
        emailError: true
      })
    }
  }

  render() {
    const {auth} = this.props;
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
            </div>
            {auth.error ? <p className="text-red">{auth.error}</p> : null}
            <div className="flex items-center justify-between">
              <div className="input-field">
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};


export default connect(mapStateToProps)(Register);