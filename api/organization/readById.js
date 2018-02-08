export default  async ({
    organization,
    token,
    visitor
}) =>
    (
        await firebase
            .database(token.app)
            .ref("organizations/" + organization.id)
            .once("value")
    )
        .val()