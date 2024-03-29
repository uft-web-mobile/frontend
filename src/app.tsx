import Routes from './routes';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;