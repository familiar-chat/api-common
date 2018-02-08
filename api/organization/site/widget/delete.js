export default  ({
    organization,
    site,
    token,
    widget
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/sites/" + site.id + "/widgets/" + widget.id)
        .remove()
