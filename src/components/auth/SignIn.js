import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';


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
        this.props.signIn(this.state);
    } 
    render() {
        
        const { authError, user } = this.props;
        if (user.uid) return <Redirect to='/' />
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
                        <button className="btn pink lighten-1 z-depth-0">Log In</button>
                        <div className="red-text center">
                            {authError ? <p>{authError.message}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    
    return {
        authError : state.auth.authError,
        user: state.firebase.auth,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signIn : creds => dispatch (signIn(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
