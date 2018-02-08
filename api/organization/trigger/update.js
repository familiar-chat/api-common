export default ({
    organization,
    token,
    trigger: {
        id: id,
        ...x
    }
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/triggers/" + id)
        .update(x)
