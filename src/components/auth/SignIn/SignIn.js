import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signUpWithFacebook, signUpWithGoogle, signUpWithGithub } from '../../../store/actions/authActions';
import { Redirect, Link } from 'react-router-dom';
import firebase from 'firebase';
import Logo from '../../layout/Logo/Logo';
import classes from './Signin.module.scss';
import Container from '../../layout/Container/Container';

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
    handleFacebookAuth = () => {
        this.props.signUpWithFacebook();
    }
    handleGoogleAuth = () => {
        this.props.signUpWithGoogle();
    }

    handleGithubAuth = () => {
        this.props.signUpWithGithub();
    }
    render() {
        
        const { authError, user } = this.props;
        if (user.uid) return <Redirect to='/' />
        return (
           
            <Container>
                <Link to='/'> <Logo/></Link>
                <div className={classes["sign-in"]}>
                    <div className={classes["form-container"]}>
                        <div className={classes["sign-in__title"]}>Sign in to Account</div>
                        <div className={classes["sign-in__line"]}></div>
                        <div className={classes["social"]}>
                            <div  onClick={this.handleFacebookAuth}>
                                <i className="fab fa-facebook-f fa-2x"></i>
                            </div>

                            <div onClick={this.handleGithubAuth}>
                                <i className="fab fa-github-alt fa-2x"></i>
                            </div>
                            <div onClick={this.handleGoogleAuth}>
                                <i className="fab fa-google fa-2x"></i>
                            </div>

                        </div>
                        <p className={classes['social__subtitle']}>or use your email account</p>

                        <form id={classes['sign-in__form']} onSubmit= {this.handleSubmit}>
                            <input  autoFocus={true} onChange={this.handleChange} type="email" id="email" name="email" placeholder="Email"  autoComplete='on' required/>
                            <input  onChange={this.handleChange} type="password" id="password" name="password" placeholder="Password"  autoComplete='on'required />
                        
                            {authError ? <p className={classes['error']}>{authError.message}</p> : null}
                            <button type="submit" className={classes["sign-in__btn"]}>Sign in</button>
                            
                        </form>
                        <div className={classes['register']} > Don't have an account ? 
                        <Link to='/signup' className={classes['register__link']}>Register</Link> </div>

                    </div>
                </div>

            </Container>
        
                
          
            
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
        signIn : creds => dispatch (signIn(creds)),
        signUpWithFacebook: ()=> dispatch(signUpWithFacebook()),
        signUpWithGoogle: () => dispatch(signUpWithGoogle()),
        signUpWithGithub: () => dispatch(signUpWithGithub()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);


