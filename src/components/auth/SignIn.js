import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect, Link } from 'react-router-dom';

import Logo from '../layout/Logo';
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
                <Link to='/'> <Logo/></Link>
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
                            <input  autoFocus={true} onChange={this.handleChange} type="email" id="email" name="email" placeholder="Email"  autoComplete='on' required/>
                            <input  onChange={this.handleChange} type="password" id="password" name="password" placeholder="Password"  autoComplete='on'required />
                            <div className="red-text center">
                                    {authError ? <p>{authError.message}</p> : null}
                            </div>
                            <button type="submit" className="btn btn-secondary">Sign up</button>
                            
                        </form>
                        <div className='register' > Don't have an account ? <Link to='/signup' className='register__link'>Register</Link> </div>

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


