export default async ({
    organization,
    token,
    visitor: {
        id: visitorId,
        ...v
    }
}) => {
    let id = 10000000000000 - new Date().getTime() + Math.random().toString(36).slice(-8)
    let visitor = await firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + id)
        .update({
            ...v
        })

    await firebase
        .database(token.app)
        .ref("visitors/" + visitorId + "/organizations/")
        .update({
            [organization.id]: {
                visitor_id: id
            }
        })
    
    return id
}
