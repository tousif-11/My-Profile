import { useState } from "react";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    setFormErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.email) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!formValues.password) {
      errors.password = "Password is required.";
    }

    setFormErrors(errors);
    setIsSubmitted(Object.keys(errors).length === 0);
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

        {isSubmitted && (
          <p className="mb-6 rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700" role="status">
            Signed in successfully.
          </p>
        )}

        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.email)}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            {formErrors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{formErrors.email}</p>}
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-4">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <a href="#forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.password)}
              aria-describedby={formErrors.password ? "password-error" : undefined}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            {formErrors.password && <p id="password-error" className="mt-2 text-sm text-red-600">{formErrors.password}</p>}
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
