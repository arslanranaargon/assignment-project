import React, { createContext, useState } from "react";
export const UserContext = createContext([] as any);
import Users from "../data/Users.json";

export function UserProvider({ children }: any) {
  const [usersArray, setUsersArray] = useState(Users);

  return (
    <UserContext.Provider value={{ usersArray, setUsersArray }}>
      {children}
    </UserContext.Provider>
  );
}
