export default  ({
    visitor: {
        id: id,
        ...x
    },
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + id)
        .onDisconnect()
        .update(x)
