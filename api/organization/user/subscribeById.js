export default async ({
    user,
    organization,
    subscriber,
    token
}) => {
    let callback = snapshot => subscriber(snapshot.val())

    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users/" + user.id)

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
