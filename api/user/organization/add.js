export default async ({
    organization,
    token,
    user: {
        id: userId,
        ...v
    }
}) => {

    let user = await firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users")
        .push({
            ...v
        })

    await firebase
        .database(token.app)
        .ref("users/" + userId + "/organizations/")
        .update({
            [organization.id]: {
                user_id: user.key
            }
        })

    return user
}
