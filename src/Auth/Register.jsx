import {useAuth} from "../Context/AuthContext"

const Register = () => {
  const { attemptRegister } = useAuth();

  const signUp = (formData) => {
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
    attemptRegister(user);

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
      <li>Already have and account? Log in here. </li>
    </div>
  )
}

export default Register;