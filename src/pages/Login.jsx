const Login = () => {
  return (
    <div className="mx-auto max-w-7xl justify-center min-h-180 flex">
      <div className="  mt-8 mb-8 w-xl rounded-xl bg-indigo-100">
        <h1 className="text-2xl font-bold text-black mb-25 pt-25 flex justify-center  items-center">
          LOG IN
        </h1>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border border-black ml-21 rounded-t-xl  px-4 py-2 mb-4 w-100"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border border-black px-4 py-2 ml-21  mb-4 w-100"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border border-black  px-4 ml-21  py-2 mb-4 w-100"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          className="border border-black ml-21 px-4 py-2 mb-8 w-100 rounded-b-xl"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-100 ml-21 hover:cursor-pointer font-bold"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Login;
