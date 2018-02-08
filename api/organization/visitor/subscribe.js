import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default  async ({
    organization,
    token,
    subscriber
}) => {
    let callback = snapshot => subscriber(
        Object.entries(snapshot.val() || {})
            .map(([i, v]) => ({
                id: i,
                ...v,
                general: {
                    ...v.general,                    
                    connections      : toArrayFromSnapshot(v.general.connections),
                    messages         : toArrayFromSnapshot(v.general.messages),
                    received_messages: toArrayFromSnapshot(v.general.received_messages),
                    trigger_messages : toArrayFromSnapshot(v.general.trigger_messages)
                },
                corresponding_users: toArrayFromSnapshot(v.corresponding_users),
                read_times         : toArrayFromSnapshot(v.read_times),
            }))
    )
    
    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
