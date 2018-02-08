import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    user,
    organization,
    limit,
    startAt,
    token
}) =>
    toArrayFromSnapshot(
        (
            await firebase
                .database(token.app)
                .ref("organizations/" + organization.id + "/users/" + user.id + "/fixed_phrases")
                .once("value")
        )
            .val()
    )