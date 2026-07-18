import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { attemptLogin, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    await attemptLogin({ email, password });
   
  };

  if (user?.id) {
    navigate("/");
  }

  return (
    <div className="form-section">
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
