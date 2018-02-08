import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    organization,
    token,
    subscriber,
}) => {
    let callback = snapshot => subscriber(
        toArrayFromSnapshot(snapshot.val())
    )

    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
