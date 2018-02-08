export default ({
    organization,
    token,
    visitor
}) =>
    firebase
        .database(token.app)
        .ref()
        .update({
            ["visitors/" + visitor.id + "/organizations/" + organization.id]: false,
            ["organizations/" + organization.id + "/visitors/" + visitor.id]: false
        })
