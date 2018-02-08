export default  ({
    visitor,
    corresponding_user,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/corresponding_users/" + corresponding_user.id)
        .onDisconnect()
        .remove()
