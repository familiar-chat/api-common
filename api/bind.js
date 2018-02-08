export default (
    {
        unsubscribe,
        ...fs
    },
    x
) => ({
    ...(
        Object.entries(fs)
            .map(([i, f]) => ({[i]: y => f({...x, ...y})}))
            .reduce((x, y) => ({...x, ...y}))
    ),
    unsubscribe: unsubscribe
})
