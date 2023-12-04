import { useAuth } from "../../context/auth";

export const Login = () => {

  const context = useAuth()

  function handleLogin() {
    context.Login();
  }

  return <>
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Logar</button>
    </div>
  </>
}