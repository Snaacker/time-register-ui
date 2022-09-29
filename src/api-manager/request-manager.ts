export function getLocalApiUrl() {
    return "http://localhost:8080/api/v1/"
}

export function getRequestHeader() {
    return {
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NDQ5NjIyMiwiaWF0IjoxNjY0NDc4MjIyfQ.KuaalTGuErRHj0sN-aT2XatL9y46Jcb7KVrdEQn6yycV4Yi8K_CMuKeobibHFWRUrb1CkODfnfIuQvtF14gcfA"
    }
}