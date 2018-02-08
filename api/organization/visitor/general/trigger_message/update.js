export default  ({
    message: {
        id: id,
        ...x
    },
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitor/" + visitor.id + "/general/trigger_messages/" + id)
        .update(x)
