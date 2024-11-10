import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({ name: "Jane Doe", email: "jane.doe@example.com"});

return (
    <UserContext.Provider value = {{ userData, setUserData }}>
        {children}
    </UserContext.Provider>
);
};

export default {UserContext, UserProvider};