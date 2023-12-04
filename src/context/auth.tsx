import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import api from '../services/mock/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
  Logout(): void;
 }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  
  const [user, setUser] = useState<object | null>(null);


  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if(storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`
    }
  }, []);


  async function Login() {
    const response = await api.post('/login', {
      username: 'user1',
      password: 'password1',
    });

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', JSON.stringify(response.data.token));
  }


  function Logout(){
    setUser(null);  
    sessionStorage.removeItem('@App:user');
    localStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
    localStorage.removeItem('@App:token');
  }

  
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export function useAuth(){
  const context = useContext(AuthContext);

  return context;
}