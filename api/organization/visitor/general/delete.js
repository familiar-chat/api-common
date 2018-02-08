export default  ({
    general,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general")
        .remove()
