export default  async ({
    subscriber,
    token
}) => {
    let callback = snapshot => subscriber(snapshot.val())

    let ref = firebase
        .database(token.app)
        .ref(".info/connected")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
