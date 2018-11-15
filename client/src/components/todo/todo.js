import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Todo extends Component {
  state = {
    action: ""
  };

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated.id) {
      const userId = isAuthenticated.id;
      console.log("new user", userId);
      axios.get("/api/todos", userId).then(res => {
        console.log("res", res);
      });
    }
  }

  addTodo = () => {
    const { isAuthenticated } = this.props.auth;

    const task = { userId: isAuthenticated.id, todo: this.state.action };

    if (task.todo && task.todo.length > 0) {
      axios
        .post("/api/todos", task)
        .then(res => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ action: "" });
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log("input field required");
    }
  };

  handleChange = e => {
    this.setState({
      action: e.target.value
    });
  };

  render() {
    let { action } = this.state;
    const { isAuthenticated, user } = this.props.auth;

    console.log("isAuthenticated", isAuthenticated.id);
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} />
        <button onClick={this.addTodo}>add todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Todo);
