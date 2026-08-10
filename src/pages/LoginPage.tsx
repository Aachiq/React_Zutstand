import { useState } from "react";
import { useAuthStore } from "../store/authStore";

function LoginPage() {
  const login = useAuthStore(
    (state) => state.login
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);

      console.log("Login successful");
    } catch (error) {
      console.log("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>

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

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;