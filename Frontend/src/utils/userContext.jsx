import React, { useState } from 'react';

const UserContext = React.createContext({ isAdmin: false });

function UserProvider({ children }) {
    const [user, setAdmin] = useState({ isAdmin: false });

    const login = (admin) => {
        setAdmin({ isAdmin: admin });
    };

    return <UserContext.Provider value={{ user, login }}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
