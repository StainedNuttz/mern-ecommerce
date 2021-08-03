import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userData: null,
  token: null,
  login: () => {},
  logout: () => {},
});