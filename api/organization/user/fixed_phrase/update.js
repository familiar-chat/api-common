export default ({
    user,
    organization,
    fixedPhrase: {
        id: id,
        ...x
    },
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users/" + user.id + "/fixed_phrases/" + id)
        .update(x)
