export default ({
    organization,
    user,
    fixedPhrase,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users/" + user.id + "/fixed_phrases/" + fixedPhrase.id)
        .remove()
