import toFormData from "api-common/api/encoding/toFormData"

export default async ({
    image,
    url,
    user,
    organization,
    token,
}) => {
    let jwt = await firebase.auth(token.app).currentUser.getIdToken()

    let response = await fetch(
            url + "/v1/organizations/" + organization.id + "/users/" + user.id + "/image",
            {
                method : "POST",
                body   : toFormData({"image_file": image}),
                headers: {
                    "Authorization": "Bearer " + jwt,
                }
            }
        )


    if (!response.ok)
        throw response

    let responseJson = await response.json()

    await firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/users/" + user.id)
        .update({
            image: responseJson["file_path"]
        })

    return true
}
