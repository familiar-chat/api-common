export default async ({
    organization,
    subscriber,
    token
}) => {
    let callback = snapshot => subscriber(snapshot.val())

    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/information")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
