export function getLocalApiUrl() {
    return "http://localhost:8080/api/v1/"
}

export function getRequestHeader() {
    return {
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NTc5NjM2MCwiaWF0IjoxNjY1Nzc4MzYwfQ.XaSuJNZ8D7p9z-ZU_AWvU5hMUyFjzU4TN2hvzVLa9QRsQrJN2eWNypyfXafmzJDayJppFEd4NLJVAy2-VaK5QQ"
    }
}