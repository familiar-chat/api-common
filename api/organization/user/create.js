export default ({
    organization,
    user,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users")
        .push(user)
