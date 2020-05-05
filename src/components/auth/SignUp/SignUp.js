import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authActions';
import Logo from '../../layout/Logo/Logo';
import classes from './SignUp.module.scss';
import Container from '../../layout/Container/Container';

class SignUp extends Component {
    state  = {
        email:'',
        password:'',
    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        
        this.props.signUp(this.state);
    } 

    render() {
        const { signUpError, user } = this.props;
        if (user.uid) return  <Redirect to='/'/>
        return (
            
            <Container>
                <Link to='/'> <Logo/></Link>
               <div className={classes["sign-up"]}>

                   <div className={classes["form-container"]}>
                       <div className={classes["sign-up__title"]}>Create an account</div>
                       <div className={classes["sign-up__line"]}></div>
                      


                       <form id={classes['sign-up__form']} onSubmit= {this.handleSubmit}>
                            <div className={classes['input-wrapper']}>
                                <input autoFocus={true} placeholder="First Name" onChange={this.handleChange} type="text" id="firstName" name="firstName"   autoComplete='on' required  className={classes['input']}/>
                                <label htmlFor="firstName"> First Name</label>
                            </div>
                            <div className={classes['input-wrapper']}>
                                <input  onChange={this.handleChange} type="text" id="lastName" name="lastName"   autoComplete='on' placeholder="Last Name" required className={classes['input']}/>
                                <label htmlFor="lastName"> Last Name</label>
                            </div>
                            <div className={classes['input-wrapper']}>
                                <input  onChange={this.handleChange} type="email" id="email" name="email"  autoComplete='on' placeholder="Email" required className={classes['input']} />
                                <label htmlFor="email"> Email</label>
                            </div>
                           <div className={classes['input-wrapper']}>
                                <input  onChange={this.handleChange} type="password" id="password" name="password"  autoComplete='on' placeholder="Password" required  className={classes['input']}/>
                                <label htmlFor="password"> Password</label>
                           </div>
                           
                                {signUpError ? <p className={classes['error']}>{signUpError.message}</p> : null}
                                
                    
                           <button type="submit" className={classes["sign-up__btn"]}>Sign up</button>
                           
                       </form>
                       <div className={classes['register']} > Already have an account ? 
                            <Link to='/signin' className={classes['register__link']}> Sign In</Link> 
                       </div>

                   </div>
               </div>
            </Container>
               
        )
    }
}

const mapStateToProps = state => {
   
    return {
        user: state.firebase.auth,
        signUpError: state.auth.authError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp : newUser => dispatch (signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignUp);



