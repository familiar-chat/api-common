import toArrayFromSnapshot from "api-common/api/util/toArrayFromSnapshot"

export default  async ({
    organization,
    subscriber,
    token,
    visitor
}) => {
    let callback = snapshot => {
        let g = snapshot.val()
        
        subscriber ({
            ...g,
            connections      : toArrayFromSnapshot(g.connections),
            messages         : toArrayFromSnapshot(g.messages),
            received_messages: toArrayFromSnapshot(g.received_messages),
            trigger_messages : toArrayFromSnapshot(g.trigger_messages),
        })
    }
    
    let ref = firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general")

    ref.on("value", callback)

    return {
        callback: callback,
        ref     : ref,
        type    : "value"
    }
}
