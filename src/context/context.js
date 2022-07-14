import React, {useContext, useEffect, useState} from 'react'

const UserContext = React.createContext();

export const ContextProvider = ({children}) => {
  const [user,setUser] = useState(null);

  useEffect(() => {
    setUser(null)
  },[])

  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}