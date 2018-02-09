export default {
    familiar: {
        firebase: {
            apiKey: "AIzaSyATkrObtScrGX_Ovzd9u7zDwqStcHqSngk",
            authDomain: "familiar-chat.firebaseapp.com",
            databaseURL: "https://familiar-chat.firebaseio.com",
            projectId: "familiar-chat",
            storageBucket: "familiar-chat.appspot.com",
            messagingSenderId: "1034601077688"
        },
        functions: {
            url: "https://us-central1-familiar-chat.cloudfunctions.net/v1"
        },
        visitor_server: {
            url: process.env.VISITOR_SERVER_URL || ""
        }
    }
}
