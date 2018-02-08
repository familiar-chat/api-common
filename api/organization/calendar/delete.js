export default ({
    calendar,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/calendars/" + calendar.id)
        .remove()
