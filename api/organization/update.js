export default ({
    organization: {
        id: id,
        ...x
    },
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + id)
        .update(x)
