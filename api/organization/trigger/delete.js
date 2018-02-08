export default ({
    trigger,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/triggers/" + trigger.id)
        .remove()
