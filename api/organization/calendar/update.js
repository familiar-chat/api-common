export default ({
    calendar: {
        id: id,
        ...x
    },
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/calendars/" + id)
        .update(x)
