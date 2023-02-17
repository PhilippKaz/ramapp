import React, { createContext, useState, useEffect } from "react";

export default UserContext;

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("userToken"));

  useEffect = (()=> {
    const fetUser = async() =>{
        const requestOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer" + token,
              },
          };
        }
    }

    const response = await fetch("")
  })

};
