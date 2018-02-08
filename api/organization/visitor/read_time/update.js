export default  ({
    read_time: {
        id,
        ...x
    },
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/read_times/" + id)
        .update(x)
