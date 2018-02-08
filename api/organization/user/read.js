export default async ({
    user,
    organization,
    limit,
    startAt,
    token
}) =>
    Object.entries(
        (
            await firebase
                .database(token.app)
                .ref("organizations/" + organization.id + "/users")
                .once("value")
        )
            .val()
      || {}
    )
        .map(([i, v]) => ({
            id: i,
            ...v
        }))
