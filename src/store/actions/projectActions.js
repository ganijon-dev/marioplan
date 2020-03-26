export const createProject = project => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userID = getState().firebase.auth.uid;
        
        firestore.collection('projects').add({
            ...project, 
            authorFirstName : profile.firstName,
            authorLastName : profile.lastName,
            authorId : userID,
            createdAt : new Date()
        }).then(() =>{
            dispatch({ type: 'CREATE_PROJECT', project })
        })
        .catch( error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })

    }
}