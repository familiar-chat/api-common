import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    limit,
    startAt,
    token
}) =>
    toArrayFromSnapshot(
        (
            await firebase
                .database(token.app)
                .ref("organizations")
                .once("value")
        )
            .val()
    )
