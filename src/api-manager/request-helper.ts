export function getLocalApiUrl() {
    return "http://localhost:8080/api/v1/"
}

export function getRequestHeader() {
    return {
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NTYyMTgwOSwiaWF0IjoxNjY1NjAzODA5fQ.IFpfEHOcb83AiNO5qWYC32IHnDyhBbhSmrAwHSftCfdXNY2F9F85yNdN_9dtjI6XODNt1w6oxVOAqSIs_-WeTA"
    }
}