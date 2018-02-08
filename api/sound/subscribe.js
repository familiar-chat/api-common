import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    organization,
    subscriber,
    token
}) => {
    let callback = snapshot => subscriber(
        toArrayFromSnapshot(snapshot.val())
    )

    let ref = firebase
        .database(token.app)
        .ref("sounds")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
