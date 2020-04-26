export const signIn = credentials => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(
            () => {
                dispatch({ type:'LOGIN_SUCCESS'});
            }
        ).catch(
            error =>{
                dispatch({type:'LOGIN_ERROR',error});
            }
        );
    }
}

export const signOut = () => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(
            () => {
                dispatch({ type: 'SIGNOUT_SUCCESS'})
            }
        );
    }
} 


export const signUp = newUser => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
                
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName : newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0].toUpperCase() + newUser.lastName[0].toUpperCase()
                })

        }).then( () => {
            dispatch({type : 'SIGNUP_SUCCESS'})
        }).catch(error => {
            dispatch({type : 'SIGNUP_FAIL', error })
        })
}
}

export const signUpWithFacebook = () => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        //const firestore = getFirestore();

        const facebookProvider = new firebase.auth.FacebookAuthProvider();

        //facebookProvider.addScope('user_email');
        // facebookProvider.addScope('user_birthday');
        // facebookProvider.setCustomParameters({
        //     'display': 'popup'
        // })

        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            console.log(result)
            // The signed-in user info.
            var user = result.user;
            console.log(user);

          }).then(()=>{
                dispatch({type : 'SIGNUP_SUCCESS'})
          }).catch(function(error) {
            
            dispatch({type : 'SIGNUP_FAIL', error })
          });
}
}

export const signUpWithGoogle = () => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        var googleProvider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {

            const {profile} = result.additionalUserInfo;
            const firstname = profile["given_name"];
            const lastname = profile["family_name"];
            const imageUrl = result.user.photoURL;
            return firestore.collection('users').doc(result.user.uid).set({
                firstName : firstname,
                lastName: lastname,
                initials: firstname[0].toUpperCase() + lastname[0].toUpperCase(),
                imageUrl: imageUrl? imageUrl:''

            })
          }).then(()=>{
                dispatch({type : 'SIGNUP_SUCCESS'})
          }).catch(function(error) {
                dispatch({type : 'SIGNUP_FAIL', error })
          });
}
}

export const signUpWithGithub = () => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();

        var githubProvider = new firebase.auth.GithubAuthProvider();
        

        firebase.auth().signInWithPopup(githubProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            console.log(result);
            var user = result.user;
            dispatch({type : 'SIGNUP_SUCCESS'})
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            dispatch({type : 'SIGNUP_FAIL', error })
          });
}
}