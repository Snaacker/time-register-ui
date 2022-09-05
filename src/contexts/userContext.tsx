import React, { createContext, useState } from "react";
import { User } from "../type/User";
let user:User = {
    id:"",
    accountId:"",
    address:"",
    email:"",
    firstName:"",
    lastName:"",
    password:"",
    phoneNumber:"",
    roleName:"",
    userName:""
}
export const UserContext = createContext({user});
