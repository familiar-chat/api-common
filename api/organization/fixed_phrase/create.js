export default ({
    fixedPhrase,
    organization,
    token
}) =>
    firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/fixed_phrases")
        .push(fixedPhrase)
