import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/auth'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputs = ({target: {name, value}}) => this.setState({[name]: value})

    handleSubmit = async () => {
        const response = await AUTH_SERVICE.login(this.state)
        console.log(response)
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <form>
                    <label>Username</label><br/>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleInputs} placeholder='username'/><br/>
                    <label>Password</label><br/>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleInputs} placeholder='*******'/><br/>
                </form>
                <h2>Hello!!</h2>
                <p>Awesome to have at IronProfile again!</p>
                <p>If you signup, you agree with all our terms and conditios where we can do whatever we want eith the data!</p>
                <button onSubmit={this.handleSubmit}>Login</button>
            </>
        )
    }
}

export default Login