export default async ({
    organization,
    token,
    subscriber
}) => {
    let callback = snapshot => subscriber(snapshot.val())
    
    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/documents")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
