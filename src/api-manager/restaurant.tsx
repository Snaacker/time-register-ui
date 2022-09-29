// test only : insert in  http header
// Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MTczMzYwNCwiaWF0IjoxNjYxNzE1NjA0fQ.mjov2frE22V1DdyK5BsVCfRsp23icbVAASzXxC43Y8YNYK94WUezuwzU67lciWm2VL6PLBQ6iPQiQcjO6Y2dHw
import axios from "axios";
import { getLocalApiUrl } from "./request-manager";
import { Restaurant } from "../type/Restaurant";

export async function getRestaurants() {
  try {
    const { data, status } = await axios.get<Restaurant>(getLocalApiUrl() + "user", {
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

export async function createRestaurant(restaurant: Restaurant) {
  try {
    const { data, status } = await axios.put<Restaurant>(
      getLocalApiUrl() + "restaurant",
      {
        name: restaurant.name,
        address: restaurant.address,
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

export async function editRestaurant(restaurant: Restaurant) {
  try {
    const { data, status } = await axios.post<Restaurant>(
      getLocalApiUrl() + "restaurant/" + restaurant.id,
      {
        name: restaurant.name,
        address: restaurant.address,
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

export async function deleteRestaurant(restaurant: Restaurant) {
  try {
    const { data, status } = await axios.delete<Restaurant>(
      getLocalApiUrl() + "user/" + restaurant.id,
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
