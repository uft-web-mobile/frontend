// auth.tsx

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import api from '../services/mock/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(data: { email: string; password: string }): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(data: { email: string; password: string }): Promise<void> {
    const response = await api.post('/api/v1/login-api/', {
      email: data.email,
      password: data.password,
    });

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
