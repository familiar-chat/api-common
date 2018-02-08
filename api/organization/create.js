export default ({
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations")
        .push(organization)
