import { useState, useEffect } from "react";

const Login = () => {


  const initialValues = { username: "", email: "", password: "", confirmPassword: "",};
  const [ formValues, setFormValues] = useState( initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
    };
   const handleSubmit = (e) => {
  e.preventDefault();

  const errors = validate(formValues);

  setFormErrors(errors);
  setIsSubmit(true);
};
    useEffect(() =>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
      };
    },[formErrors]);


    const validate = (values) => {
  const errors = {};

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.username) {
    errors.username = "Username is required!";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters!";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required!";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match!";
  }

  return errors;

};

    



 return (
  <div className="mx-auto max-w-7xl min-h-180 flex justify-center">

    {Object.keys(formErrors).length === 0 && isSubmit && (
      <div className="ui message success">
        Signed in successfully
      </div>
    )}

    <form
      onSubmit={handleSubmit}
      className="mt-8 mb-8 w-xl rounded-xl bg-indigo-100"
    >
      <h1 className="text-2xl font-bold text-black mb-25 pt-25 flex justify-center items-center">
        LOG IN
      </h1>

      {/* Username */}
      <div>
        <p>{formErrors.username}</p>

        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          className="border border-black ml-21 rounded-t-xl px-4 py-2 mb-4 w-100"
        />
      </div>

      {/* Email */}
      <div>
        <p>{formErrors.email}</p>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="border border-black px-4 py-2 ml-21 mb-4 w-100"
        />
      </div>

      {/* Password */}
      <div>
        <p>{formErrors.password}</p>

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          className="border border-black px-4 ml-21 py-2 mb-4 w-100"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <p>{formErrors.confirmPassword}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          className="border border-black ml-21 px-4 py-2 mb-8 w-100 rounded-b-xl"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-100 ml-21 hover:cursor-pointer font-bold"
      >
        SUBMIT
      </button>
    </form>
  </div>
);
};

export default Login;
