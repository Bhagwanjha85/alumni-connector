// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [usersDB, setUsersDB] = useState([]); // Simulating a database

  // Load users from localStorage on initial render
  useEffect(() => {
    const storedUsers = localStorage.getItem('usersDB');
    if (storedUsers) {
      setUsersDB(JSON.parse(storedUsers));
    }
    
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const signup = (name, email, password) => {
    // Check if user already exists
    if (usersDB.some(u => u.email === email)) {
      throw new Error('User already exists with this email');
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password // In real app, hash this password
    };

    const updatedUsers = [...usersDB, newUser];
    setUsersDB(updatedUsers);
    localStorage.setItem('usersDB', JSON.stringify(updatedUsers));
    
    return newUser;
  };

  const login = (email, password) => {
    const foundUser = usersDB.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    setUser(foundUser);
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    return foundUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}