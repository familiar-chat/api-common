import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default  async ({
    organization,
    token,
    visitor
}) => {

    let v = (
        await firebase
            .database(token.app)
            .ref("organizations/" + organization.id + "/visitors/" + visitor.id)
            .once("value")
    )
        .val()
        
    return ({
        id: visitor.id,
        ...v,
        general: {
            ...v.general,            
            connections      : toArrayFromSnapshot(v.general.connections),
            messages         : toArrayFromSnapshot(v.general.messages),
            received_messages: toArrayFromSnapshot(v.general.received_messages),
            trigger_messages : toArrayFromSnapshot(v.general.trigger_messages)
        },
        corresponding_users: toArrayFromSnapshot(v.corresponding_users),
        read_times: toArrayFromSnapshot(v.read_times),
    })
}