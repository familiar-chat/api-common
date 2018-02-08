import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    limit,
    organization,
    startAt,
    token
}) =>
    toArrayFromSnapshot(
        (
            await firebase
                .database(token.app)
                .ref("organizations/" + organization.id + "/triggers")
                .once("value")
        )
            .val()
    )