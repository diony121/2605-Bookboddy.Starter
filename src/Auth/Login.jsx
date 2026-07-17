import { useAuth } from "../Context/AuthContext"

    const Login = ()=> {
    const { attemptLogin } = useAuth();
    const login = (formData) => {
      const email = formData.get("email");
      const password = formData.get("password");
      attemptLogin({email, password});

    }

    return (
      <div>
        <h1>Log in to your account</h1>
        <form action={login}>
          <label>
            Email:
            <input type="email" name="email"/>
          </label>
          <label>
            Password;
            <input type="password" name="password"/>
          </label>
          <button type="submit">Login</button>
        </form>
        <li>Need and account? register here. </li>
      </div>
    )
}

export default Login;