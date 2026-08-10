import { useAuthStore } from "../store/authStore";

function LoginPage() {

   const login = useAuthStore(state => state.login);

   return (
      <div>
         <h2>Login</h2>
         <button onClick={login}>Login</button>
      </div>
   );
}
export default LoginPage;