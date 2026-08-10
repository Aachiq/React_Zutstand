import { useState } from "react";
import { useAuthStore } from "../store/authStore";

function LoginPage() {
  const login = useAuthStore(
    (state) => state.login
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // add loading state to not be in store becasue not global in all app just used in "LoginPage"
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await login(email, password);

      console.log("Login successful");
    } catch (error) {
      console.log("Login failed");
      // here no need setLoading(false) beacsue automatically when catch it goes to finally
      // and finally take both success of try() when it finished and catch()

    } finally{
        setIsLoading(false)
    }
  };

 return (
    <div>
      <h3>Zustand Login</h3>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={isLoading}
      >
        {/* {isLoading
          ? "Logging in..."
          :  */}
          "Login"
          {/* } */}
      </button>
    </div>
  );
}

export default LoginPage;