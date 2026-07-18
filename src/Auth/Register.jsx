import {useAuth} from "../Context/AuthContext"
import { Link, useNavigate } from "react-router";



const Register = () => {
  const { attemptRegister } = useAuth();
   const navigate = useNavigate();

  const signUp = async (formData) => {
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const user = {
      name,
      lastName,
      email,
      password,
    };
    const success = await attemptRegister(user);
    if (success) {
      navigate("/login");
    }
  } 

  return (
    <div > 
      <h3>Register for an account</h3>
      <form action={signUp}>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName"/>
        </label>
        <label>
          Email:
          <input type="text" name="email"/>
        </label>
        <label>
          Password:
          <input type="password" name="password"/>
        </label>
        <label>
          <button type="submit">Submit</button>
        </label>
      </form>
     <p>
        Already have an account? <Link to="/login">Log in here.</Link>
      </p>
    </div>
  )
}

export default Register;