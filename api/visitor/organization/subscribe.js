import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    subscriber,
    token,
    visitor
}) => {
    let callback = snapshot => f(
        toArrayFromSnapshot(snapshot.val())
    )

    let ref = firebase
        .database(token.app)
        .ref("visitors/" + visitor.id + "/organizations")
        .orderByValue()
        .equalTo(true)

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
