export default ({
    site,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/sites/" + site.id)
        .remove()
