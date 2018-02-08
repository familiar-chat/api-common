export default ({
    organization,
    user: {
        id: id,
        ...x
    },
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users/" + id)
        .update(x)
