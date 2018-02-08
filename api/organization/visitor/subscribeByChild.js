import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    child,
    endAt,
    equalTo,
    limit,
    organization,
    startAt,
    subscriber,    
    token,
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
                    trigger_messages : toArrayFromSnapshot(v.general.trigger_messages),
                },
                corresponding_users: toArrayFromSnapshot(v.corresponding_users),
                read_times: toArrayFromSnapshot(v.read_times),
            }))
    )


    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors")
        .orderByChild(child)

    ref = limit   ? ref.limitToFirst(limit).orderByKey() : ref
    ref = startAt ? ref.startAt(startAt)                 : ref
    ref = endAt   ? ref.endAt(endAt)                     : ref
    ref = equalTo ? ref.equalTo(equalTo)                 : ref

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}

