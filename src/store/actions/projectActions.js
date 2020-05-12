export const createProject = project => {
    return (dispatch, getState, { getFirestore, getFirebase, storage }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userID = getState().firebase.auth.uid;


        const { image } = project;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
                return;
            },
            (error) => {
                console.log(error);
                return;
            },
            () => {

                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    const updatedProject = JSON.parse(JSON.stringify(project));



                    firestore.collection('projects').add({
                            ...updatedProject,
                            image: url,
                            authorFirstName: profile.firstName,
                            authorLastName: profile.lastName,
                            authorId: userID,
                            createdAt: new Date()
                        }).then(() => {
                            dispatch({ type: 'CREATE_PROJECT', project })
                        })
                        .catch(error => {
                            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
                        })

                })

            })


    }
}