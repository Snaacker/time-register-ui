export function getLocalApiUrl() {
    return "http://localhost:8080/api/v1/"
}

export function getRequestHeader() {
    return {
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NTI3NDE3MiwiaWF0IjoxNjY1MjU2MTcyfQ.RXRIdT6zYzC5e1Dhlo5MEu-BK9BfNxjlR22qgeX3d3ms8Pn861P8M5bnihwO4pOVLRpBi9kqszGwic2vsjmdyw"
    }
}