export default ({
    organization,
    token,
    site: {
        id: id,
        ...x
    }
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/sites/" + id)
        .update(x)
