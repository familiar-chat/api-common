export default ({
    message,
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general/messages")
        .push(message)
