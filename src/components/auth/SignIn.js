import React, { Component } from 'react'

class SignIn extends Component {
    state  = {
        email:'',
        password:''
    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    } 
    render() {
        return (
            <div className='container'> 
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" id="email"/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" id="password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
