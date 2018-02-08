export default ({
    organization,
    usre,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users")
        .remove()
