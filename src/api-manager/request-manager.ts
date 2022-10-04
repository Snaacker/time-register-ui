export function getLocalApiUrl() {
    return "http://localhost:8080/api/v1/"
}

export function getRequestHeader() {
    return {
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NDg0NTAxNCwiaWF0IjoxNjY0ODI3MDE0fQ.U_6SNV7jbMCmqq07x1utY0etJkScs_5Pxgo3QZgGTTWub0gU0SxkzhKReVj34r5kJD2Uax4SZRDBY5AklHwLFQ"
    }
}