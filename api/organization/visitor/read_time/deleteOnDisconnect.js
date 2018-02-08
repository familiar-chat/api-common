export default  ({
    visitor,
    read_time,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/read_times/" + read_time.id)
        .onDisconnect()
        .remove()
