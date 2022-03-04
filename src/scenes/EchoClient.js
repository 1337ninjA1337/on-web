import Echo from "laravel-echo"
import Pusher from "pusher-js"

export default {
    getEchoClient: (skinID, accessToken) => {
        const options = {
            broadcaster: "pusher",
            key: process.env[skinID]["pusherKey"],
            cluster: "eu",
            authEndpoint: process.env[skinID]["pusherBoardcasting"],
            auth: {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    SkinID: skinID,
                    Accept: "application/json",
                },
            },
        };
        return new Echo(options);
    }
}