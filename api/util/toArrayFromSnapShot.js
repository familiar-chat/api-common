export default snapShot => 
    Object.entries(snapShot || {})
        .map(
            ([i,v]) => 
                ({
                    id:i,
                    ...v
                })
        )