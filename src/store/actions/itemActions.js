export const createItem = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    firestore
      .collection("item")
      .add({
        ...item,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_ITEM", item });
      })
        .catch(err => {
          dispatch({type: 'CREATE_ITEM_ERROR', err})
      })
  };
};
