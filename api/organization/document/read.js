export default async ({
    limit,
    organization,
    startAt,
    token
}) =>
    (
        await firebase
            .database(token.app)
            .ref("organizations/" + organization.id + "/documents")
            .once("value")
    )
        .val()
