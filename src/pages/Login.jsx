import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formValues, setFormValues] = useState({ username: "", gmail: "" });
  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    setFormErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.username.trim()) {
      errors.username = "Username is required.";
    }

    if (!formValues.gmail.trim()) {
      errors.gmail = "Gmail is required.";
    } else if (!emailPattern.test(formValues.gmail)) {
      errors.gmail = "Enter a valid Gmail address.";
    }

    setFormErrors(errors);
    setMessage("");

    if (Object.keys(errors).length === 0) {
      axios
        .post("api/login.php", formValues)
        .then((response) => {
          if (response.data.success) {
            setMessage(response.data.message);
          } else {
            setMessage(response.data.message || "Login failed.");
          }
        })
        .catch(() => setMessage("Unable to connect to the login API."));
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-slate-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to continue to your profile</p>
        </div>

        {message && (
          <p className="mb-6 rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700" role="status">
            {message}
          </p>
        )}

        <div className="space-y-5">
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              autoComplete="username"
              value={formValues.username}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.username)}
              aria-describedby={formErrors.username ? "username-error" : undefined}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            {formErrors.username && <p id="username-error" className="mt-2 text-sm text-red-600">{formErrors.username}</p>}
          </div>

          <div>
            <label htmlFor="gmail" className="mb-2 block text-sm font-medium text-slate-700">Gmail</label>
            <input
              id="gmail"
              type="email"
              name="gmail"
              autoComplete="email"
              value={formValues.gmail}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.gmail)}
              aria-describedby={formErrors.gmail ? "gmail-error" : undefined}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            {formErrors.gmail && <p id="gmail-error" className="mt-2 text-sm text-red-600">{formErrors.gmail}</p>}
          </div>
        </div>

        <button type="submit" className="mt-7 w-full rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Sign in
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          New here? <a href="#create-account" className="font-medium text-blue-600 hover:text-blue-700">Create an account</a>
        </p>
      </form>
    </main>
  );
};

export default Login;
