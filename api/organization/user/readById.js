export default  async ({
    user,
    organization,
    token,
    visitor
}) =>
    (
        await firebase
            .database(token.app)
            .ref("organizations/" + organization.id + "/users/" + user.id)
            .once("value")
    )
        .val()