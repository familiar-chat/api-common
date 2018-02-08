export default ({
    trigger,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/triggers")
        .push(trigger)
