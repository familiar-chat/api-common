import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    limit,
    startAt,
    token,
    user
}) =>
    toArrayFromSnapshot(
        (
            await firebase
                .database(token.app)
                .ref("users/" + user.id + "/organizations")
                .once("value")
        )
            .val()
    )
