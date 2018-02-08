import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    subscriber,
    token,
    user
}) => {
    let callback = snapshot => f(
        toArrayFromSnapshot(snapshot.val())
    )

    let ref = firebase
        .database(token.app)
        .ref("users/" + user.id + "/organizations")
        .orderByValue()
        .equalTo(true)

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
