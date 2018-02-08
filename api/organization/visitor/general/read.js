import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default async ({
    limit,
    organization,
    startAt,
    token,
    visitor
}) => {
    
    let query = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general")
    
    query = limit ? query.limitToFirst(limit).orderByKey() : query
    query = startAt ? query.startAt(startAt) : query

    let g = (await query.once("value")).val()

    return ({
        ...g,
        connections      : toArrayFromSnapshot(g.connections),
        messages         : toArrayFromSnapshot(g.messages),
        received_messages: toArrayFromSnapshot(g.received_messages),
        trigger_messages : toArrayFromSnapshot(g.trigger_messages)
    })
}