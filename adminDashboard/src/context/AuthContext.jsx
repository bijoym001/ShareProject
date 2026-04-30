import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "Katrina Kaif",
        role: "admin",
        avatar: "https://wallpapers.com/images/hd/katrina-kaif-tu-jaane-na-outfit-mua9we3sfbvvasvk.jpg",
        location: "Sohna, Haryana"
    });

    const switchRole = (role) => {
        setCurrentUser(prev => ({ ...prev, role }));
    };

    const isAdmin = currentUser.role === 'admin';

    return (
        <AuthContext.Provider value={{ currentUser, switchRole, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);