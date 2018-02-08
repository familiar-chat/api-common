export default ({
    organization,
    token,
    user
}) =>
    firebase
        .database(token.app)
        .ref()
        .update({
            ["users/" + user.id + "/organizations/" + organization.id]: false,
            ["organizations/" + organization.id + "/users/" + user.id]: false
        })
