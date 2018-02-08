export default ({
    fixedPhrase: {
        id: id,
        ...x
    },
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/fixed_phrases/" + id)
        .update(x)
