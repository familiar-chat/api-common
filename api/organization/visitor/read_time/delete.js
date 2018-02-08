export default  ({
    read_time,
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/read_times/" + read_time.id)
        .remove()
