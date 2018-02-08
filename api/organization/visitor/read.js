import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    child,
    limit,
    organization,
    startAt,
    endAt,
    token
}) => {
    
    let query = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors")
    
    query = limit   ? query.limitToFirst(limit).orderByKey() : query
    query = startAt ? query.startAt(startAt)                 : query
    query = endAt   ? query.endAt(endAt)                     : query

    return (
        Object.entries(
            (
                await query.once("value")
            )
                .val() 
          || {}
        )
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
}