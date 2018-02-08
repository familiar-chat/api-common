export default {
    familiar: {
        firebase: {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        },
        functions: {
            url: ""
        },
        visitor_server: {
            url: process.env.VISITOR_SERVER_URL || ""
        }
    }
}
