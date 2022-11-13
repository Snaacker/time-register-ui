import axios from "axios";
import { createCookie } from "./cookie-helper";
import { getLocalApiUrl } from "./request-helper";

export async function saveAuthorizationToken(userAuthorization: string) {
    console.log(userAuthorization)
    try {
        axios.defaults.headers.common['Authorization'] = userAuthorization
        const { data, status } = await axios.post<string>(
            getLocalApiUrl() + "authentication",
            {
                headers: {
                    Accept: "*/*",
                    'Access-Control-Allow-Origin': '*'
                },
            }

        );
        console.log(data)
        console.log(status)
        createCookie("user", data.toString())
    } catch (error) {
        console.log(error)
    }
}