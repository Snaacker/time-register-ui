// test only : insert in  http header
// Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MTczMzYwNCwiaWF0IjoxNjYxNzE1NjA0fQ.mjov2frE22V1DdyK5BsVCfRsp23icbVAASzXxC43Y8YNYK94WUezuwzU67lciWm2VL6PLBQ6iPQiQcjO6Y2dHw
import axios from "axios";
import { getLocalApiUrl } from "../api-manager/url-management";
import { User } from "../type/User";

export async function getUsers() {
  try {
    const { data, status } = await axios.get<User>(getLocalApiUrl() + "user", {
      headers: {
        Accept: "application/json",
      },
    });

    console.log("response status is: ", status);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(id: String) {
  try {
    const { data, status } = await axios.get<User>(
      getLocalApiUrl() + "user" + id,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log("response status is: ", status);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(user: User) {
  try {
    const { data, status } = await axios.put<User>(
      getLocalApiUrl() + "user",
      {
        account_id: user.accountId,
        address: user.address,
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        password: user.password,
        phone_number: user.password,
        role_name: user.roleName,
        user_name: user.userName,
      },
      {
        headers: {
          Accept: "application/json",
          'Access-Control-Allow-Origin': 'cors',
        },
      }
    );

    console.log("response status is: ", status);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function editUser(user: User) {
  try {
    const { data, status } = await axios.post<User>(
      getLocalApiUrl() + "user/" + user.id,
      {
        account_id: user.accountId,
        address: user.address,
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        password: user.password,
        phone_number: user.password,
        role_name: user.roleName,
        user_name: user.userName,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log("response status is: ", status);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(user: User) {
  try {
    const { data, status } = await axios.delete<User>(
      getLocalApiUrl() + "user/" + user.id,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log("response status is: ", status);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
