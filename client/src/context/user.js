import React, {useState} from 'react'

const UserContext = React.createContext(false)

function UserProvider ({children}) {
    const [currentUser, setCurrentUser] = useState(false)
    
    return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}> 
        {children}	    
    </UserContext.Provider>
)
}

export {UserContext, UserProvider}