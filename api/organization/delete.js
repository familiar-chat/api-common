export default ({
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id)
        .remove()
