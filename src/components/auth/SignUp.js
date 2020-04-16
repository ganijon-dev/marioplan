import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import Logo from '../layout/Logo';
//import './Signin.scss';

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
        const { authError, user } = this.props;
        //console.log(authError);
        if (user.uid) return  <Redirect to='/'/>
        return (
            
            <div className='container'> 
               
               <Link to='/'> <Logo/></Link>
               <div className="sign-in">

                   <div className="form-container">
                       <div className="sign-in__title text-green ">Create an account</div>
                       <div className="sign-in__line bg-green line"></div>
                      


                       <form id='sign-in__form' onSubmit= {this.handleSubmit}>
                            <input autoFocus={true} onChange={this.handleChange} type="text" id="firstName" name="firstName" placeholder="First Name"  autoComplete='on' required />
                            <input  onChange={this.handleChange} type="text" id="lastName" name="lastName" placeholder="Last Name"  autoComplete='on' required/>
                           <input  onChange={this.handleChange} type="email" id="email" name="email" placeholder="Email"  autoComplete='on' required />
                           <input  onChange={this.handleChange} type="password" id="password" name="password" placeholder="Password"  autoComplete='on' required />
                           <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                                
                           </div>
                           <button type="submit" className="btn btn-secondary">Sign up</button>
                           
                       </form>
                       <div className='register' > Already have an account ? <Link to='/signin' className='register__link'>Sign In</Link> </div>

                   </div>
               </div>

           </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        user: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp : newUser => dispatch (signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignUp);



