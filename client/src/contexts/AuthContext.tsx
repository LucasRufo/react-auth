import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { User } from '../types/User';
import api from '../api/api';
import { useHistory } from 'react-router-dom';

type AuthContextType = {
  signIn: (user: User) => Promise<void>,
  signOut: () => void,
  user: string,
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState("");
  const history = useHistory();
  const isAuthenticated = !!userEmail;

  const signIn = async (user: User) => {
    try {
      const { data } = await api.post<any>('/auth', user);

      localStorage.setItem('token', data.AccessToken);

      api.defaults.headers['Authorization'] = `Bearer ${data.AccessToken}`;

      setUserEmail(data.UserEmail);

      history.push('/authenticated');
    }
    catch (error) {
      toast.error('Email ou senha inválidos', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
      });
    }
  }

  const signOut = () => {
    localStorage.removeItem('token');
  
    history.push('/');
  }

  const AuthContextValue: AuthContextType = {
    signIn,
    signOut,
    isAuthenticated,
    user: userEmail
  }

  return (
    <AuthContext.Provider value={ AuthContextValue }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;