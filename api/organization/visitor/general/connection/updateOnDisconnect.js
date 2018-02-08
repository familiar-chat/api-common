export default  ({
    connection: {
        id: id,
        ...x
    },
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general/connections/" + id)
        .onDisconnect()
        .update(x)

