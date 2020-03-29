const initState = {
    authError : null
}
const authReducer = (state = initState,action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            
            return {
                ...state, 
                authError: null
            };

        case 'LOGIN_ERROR' :
            
            return {
                ...state, 
                authError: action.error
            };  

        case 'SIGNOUT_SUCCESS' :
            
            return state; 

        case 'SIGNUP_SUCCES':
            
            return {
                ...state, 
                authError: null
            }
        case 'SIGNUP_FAIL':
            
            return {
                ...state, 
                authError: action.error.message
            }
        default : 
            return state;
    }
}
export default authReducer;