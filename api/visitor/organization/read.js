import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    limit,
    startAt,
    token,
    visitor
}) =>
    toArrayFromSnapshot(
        (
            await firebase
                .database(token.app)
                .ref("visitors/" + visitor.id + "/organizations")
                .once("value")
        )
            .val()
    )
