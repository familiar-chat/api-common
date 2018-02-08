export default  ({
    connection,
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general/connections")
        .remove()
