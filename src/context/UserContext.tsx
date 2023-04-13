import React, { ReactNode, createContext, useState } from "react";
import users from "../data/Users";
import { UserProps } from "../utils/types";

interface UserContextValue {
  usersArray: UserProps[];
  setUsersArray: React.Dispatch<React.SetStateAction<UserProps[]>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextValue>({
  usersArray: [],
  setUsersArray: () => {},
});

export function UserProvider({ children }: UserProviderProps) {
  const [usersArray, setUsersArray] = useState<UserProps[]>([...users]);

  return (
    <UserContext.Provider value={{ usersArray, setUsersArray }}>
      {children}
    </UserContext.Provider>
  );
}
