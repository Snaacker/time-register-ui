import axios from "axios";
import {getLocalApiUrl, getRequestHeader} from "./request-helper";
import { Restaurant } from "../type/Restaurant";

export async function getRestaurants() {
  try {
    const { data, status } = await axios.get<Restaurant>(getLocalApiUrl() + "restaurant", {
      params:{
        startPage:0,
        pageSize:10
      },
      headers: getRequestHeader(),
    });

    console.log("response status is: ", status);
    return data.genericObject

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
