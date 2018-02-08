import ValidateError from "path/to/ValidateError"

export default (
    {
        enabled,
        name,
        value,
        ...props
    },
    type = "push" // push || update    
) => {
    if (type == "push")
        if (
            enabled != undefined 
         && name    != undefined
         && value   != undefined
        )
            throw ValidateError("`enabled` `name` `value` must be supplied")
    
    if(enabled != undefined) {
        if (!typeof enabled === "boolean")
            throw ValidateError("`enabled` must be type boolean")
    }

    if(name != undefined) {
        if (!typeof name === "string")
            throw ValidateError("`name` must be type string")
        if (!name.length <= 32)
            throw ValidateError("`name` can not exceed 32 characters")
    }
    
    if (value != undefined) {
        if (!typeof value === "string")
            throw ValidateError("`value` must be type string")
        if(!name.length <= 512)
            throw ValidateError("`value` can not exceed 512 characters")
    }

    if (props)
        throw ValidateError(
            Object.entries(props)
                .map(x => 
                    "`" + x[0] + "`"
                ).join(" ")
          + " does not correspond"
        )
    
    return {enabled, name, value}
}

