export default  ({
    corresponding_user,
    visitor,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/corresponding_users/" + corresponding_user.id)
        .remove()
