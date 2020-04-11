import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import './Signin.scss';

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
               
        <div className="logo">
            <span className='logo__main-name'>Mario</span>
            <span className='logo__second-name'> Plan</span>
        </div>
        <div className="sign-in">

            <div className="form-container">
                <div className="sign-in__title text-green ">Sign in to Account</div>
                <div className="sign-in__line bg-green line"></div>
                <div className="social">
                    <div>
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </div>

                    <div>
                        <i className="fab fa-github-alt fa-2x"></i>
                    </div>
                    <div>
                        <i className="fab fa-google fa-2x"></i>
                    </div>

                </div>
                <p className='social__subtitle'>or use your email account</p>

                <form id='sign-in__form' onSubmit= {this.handleSubmit}>
                    <input  onChange={this.handleChange} type="email" id="email" name="email" placeholder="Email" />
                    <input  onChange={this.handleChange} type="password" id="password" name="password" placeholder="Password" />
                    <div className="red-text center">
                            {authError ? <p>{authError.message}</p> : null}
                    </div>
                    <button type="submit" className="btn btn-secondary">Sign up</button>
                    
                </form>

            </div>
    </div>
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


