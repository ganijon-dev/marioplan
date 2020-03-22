const initState = {
    authError : null
}
const authReducer = (state = initState,action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('SUCCES LOGGING IN ', action.type);
            return {
                ...state, 
                authError: null
            };

        case 'LOGIN_ERROR' :
            console.log('ERROR LOGGING', action.error)
            return {
                ...state, 
                authError: action.error
            };  

        case 'SIGNOUT_SUCCESS' :
            console.log('SIGN OUT')
            return state; 

        case 'SIGNUP_SUCCES':
            console.log('SIGN UP')
            return {
                ...state, 
                authError: null
            }
        case 'SIGNUP_FAIL':
            console.log('SIGNUP FAIL' , action.error.message)
            return {
                ...state, 
                authError: action.error.message
            }
        default : 
            return state;
    }
}
export default authReducer;