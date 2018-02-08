import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default  async ({
    limit,
    organization,
    site,
    startAt,
    token
}) =>
    toArrayFromSnapshot(
        (
            await firebase
                .database(token.app)
                .ref("organizations/" + organization.id + "/sites/" + site.id + "/widgets")
                .once("value")
        )
            .val()
    )
