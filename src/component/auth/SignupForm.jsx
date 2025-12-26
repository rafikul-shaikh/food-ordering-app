const SignupForm = ({ onSwitch }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <input
        type="text"
        placeholder="Email or Phone"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <button className="w-full bg-yellow-500 text-white py-2 rounded">
        Sign Up
      </button>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <span
          onClick={onSwitch}
          className="text-yellow-600 cursor-pointer font-medium"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
