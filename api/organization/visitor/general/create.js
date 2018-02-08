export default  ({
    general,
    organization,
    token,
    visitor
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "general")
        .push(general)
