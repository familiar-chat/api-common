import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default  async ({
    limit,
    organization,
    startAt,
    token,
    visitor
}) =>
    toArrayFromSnapshot(
        (
            await firebase
                .database(token.app)
                .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/read_times")
                .once("value")
        )
            .val()
    )
