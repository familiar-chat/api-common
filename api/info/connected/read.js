export default  async ({
    token,
}) =>
    (
        await firebase
            .database(token.app)
            .ref(".info/connected")
            .once("value")
    ).val()