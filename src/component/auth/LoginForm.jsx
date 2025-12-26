const LoginForm = ({ onSwitch }) => {
  return (
    <div className="ml-10 mr-10">
      <h2 className="text-3xl font-semibold mb-6">Login</h2>

      <label htmlFor="email" className="">
        Email or Phone Number <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="email"
        required
        placeholder="Enter Email or Phone Number"
        className="w-full text-sm  border  border-orange-500 px-3 py-2 mt-1 mb-2 rounded-lg"
      />
      <label htmlFor="password">
        Password <span className="text-red-500">*</span>
      </label>

      <input
        type="password"
        id="password"
        required
        placeholder="Enter Password"
        className="w-full text-sm border border-orange-500 px-3 py-2 mt-1 mb-4 rounded-lg"
      />

      <button className="w-full bg-yellow-500 text-white py-2 rounded">
        Sign In
      </button>

      <p className="text-sm text-center mt-4">
        New user?{" "}
        <span
          onClick={onSwitch}
          className="text-yellow-600 cursor-pointer font-medium"
        >
          Create your account
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
