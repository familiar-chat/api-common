import toFormData from "api-common/api/encoding/toFormData"

export default async ({
    image,
    url,
    organization,
    token,
}) => {
    let jwt = await firebase.auth(token.app).currentUser.getIdToken()

    let response = await fetch(
            url + "/v1/organizations/" + organization.id + "/documents/image",
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
        .ref("organizations/" + organization.id + "/documents/images")
        .push({
            url: responseJson["file_path"]
        })

    return true
}
