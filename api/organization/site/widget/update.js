export default  ({
    organization,
    site,
    token,
    widget: {
        id: id,
        ...x
    }
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/sites/" + site.id + "/widgets/" + id)
        .update(x)
