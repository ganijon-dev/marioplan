export const createProject = project => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, 
            authorFirstName : 'Asnijon',
            authorLastName : 'Toshtemurov',
            authorId : 234343,
            createdAt : new Date()
        }).then(() =>{
            dispatch({ type: 'CREATE_PROJECT', project })
        })
        .catch( error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })

    }
}