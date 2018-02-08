export default  async ({
    limit,
    organization,
    startAt,
    token,
    visitor
}) =>
    (
        await firebase
            .database(token.app)
            .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general/location")
            .once("value")
    )
        .val()
