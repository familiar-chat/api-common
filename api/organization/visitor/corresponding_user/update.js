export default  ({
    corresponding_user: {
        id,
        ...x
    },
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/corresponding_users/" + id)
        .update(x)
