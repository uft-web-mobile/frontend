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

    setUser(response.data.id);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    localStorage.setItem('@App:id', JSON.stringify(response.data.id));
    localStorage.setItem('@App:username', JSON.stringify(response.data.username));
    localStorage.setItem('@App:email', JSON.stringify(response.data.email));
    localStorage.setItem('@App:token', JSON.stringify(response.data.token));
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem('@App:id');
    localStorage.removeItem('@App:username');
    localStorage.removeItem('@App:email');
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
