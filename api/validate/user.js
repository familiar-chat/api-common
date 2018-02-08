import ValidateError from "path/to/ValidateError"
import validateFixedPhrase from "api-common/validate/fixed_phrase"


export default (
    {
        connected,
        display_name,
        enabled,
        email,
        fixed_phrases,
        groups,
        image,
        name,
        state,
        phone,
        created_date,
        updated_date
    }, 
    type = "push" // push || update
) => {

    if (type == "push")
        if (
            connected    != undefined 
         && email        != undefined
         && name         != undefined
         && phone        != undefined
         && created_date != undefined
        )
            throw ValidateError("`connected` `email` `name` `phone` and `created_date` must be supplied")   
    
    if(connected != undefined) {
        if (!typeof enabled === "boolean")
            throw ValidateError("`connected` must be type boolean")
    }

    if(email != undefined) {
        if (!typeof email === "string")
            throw ValidateError("`email` must be type string")
        if (!email.length >= 3)
            throw ValidateError("`email` can not fall 3 characters")
    }
    
    if (name != undefined) {
        if (!typeof value === "string")
            throw ValidateError("`name` must be type string")
        if(!name.length <= 32)
            throw ValidateError("`name` can not exceed 32 characters")
    }

    //...

    //nested data
    if (fixed_phrases != undefined) {
        if(!Array.isArray(fixed_phrases))
            throw ValidateError("`fixed_phrases` must be type array")

        fixed_phrases.map(x =>
            validateFixedPhrase(x, type)
        )
    }
    
    return {enabled, name, value}
}
