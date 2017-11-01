import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userNameValue: '',
      passWordValue: ''
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userNameValue: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      passwordValue: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.value} onChange={this.handleUserNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
