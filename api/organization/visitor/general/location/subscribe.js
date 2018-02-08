export default  async ({
    organization,
    token,
    visitor,
    subscriber
}) => {

    let callback = snapshot => subscriber(snapshot.val())

    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general/location")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
