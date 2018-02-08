export default  ({
    location: {
        id: id,
        ...x
    },
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitor/" + visitor.id + "/general/location/" + id)
        .update(x)
