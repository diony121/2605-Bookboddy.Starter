import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { attemptLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    attemptLogin({ email, password });
    navigate("/");
  };

  return (
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        Need an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};

export default Login;
