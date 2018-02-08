import toFormData from "api-common/api/encoding/toFormData"

export default async ({
    image,
    imageUrl,    
    visitor,
    url,
    organization,
    token,
}) => {
    if(image) {
        let jwt = await firebase.auth(token.app).currentUser.getIdToken()

        let response = await fetch(
            url + "/v1/organizations/" + organization.id + "/visitors/" + visitor.id + "/received_messages/image",
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

        imageUrl = (await response.json())["file_path"]
    }

    await firebase
        .database(token.app)
        .ref("organizations/" + organization.id + "/visitors/" + visitor.id + "/general/received_messages")
        .push({
            url         : imageUrl,
            type        : "image",
            sender      : "operator",
            created_date: new Date().getTime()
        })

    return true
}