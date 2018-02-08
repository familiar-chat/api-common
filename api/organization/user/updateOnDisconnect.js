export default  ({
    organization,
    user: {
        id: id,
        ...x
    },
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users/" +id)
        .onDisconnect()
        .update(x)
