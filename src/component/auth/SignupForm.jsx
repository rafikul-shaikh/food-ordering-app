const SignupForm = ({ onLogin }) => {
  return (
    <div className="px-4 sm:px-10">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="first-name" className="mb-1 text-sm ">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            required
            placeholder="First Name"
            className="w-full border border-orange-500 px-3 py-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="last-name" className="mb-1 text-sm ">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            className="w-full border border-orange-500 px-3 py-2 rounded"
          />
        </div>
      </div>
      <div className="mt-2">
        <label htmlFor="email" className="">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          className="w-full border  border-orange-500 px-3 py-2 mb-3 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="create-password">
            Create Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="create-password"
            placeholder="Enter Password"
            className="w-full border  border-orange-500 px-3 py-2 mb-4 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirm-pasword">
            Confirnm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Confirm-password"
            placeholder="confirm Password"
            className="w-full border  border-orange-500 px-3 py-2 mb-4 rounded"
          />
        </div>
      </div>

      <ul className="px-4 sm:px-6 mb-3 list-disc pl-5 text-xs sm:text-[10px] text-gray-600">
        <li>The password must contain at least one lowercase letter</li>
        <li>The password must contain at least one uppercase letter</li>
        <li>The password must be between 8 and 24 characters in length</li>
        <li>The password must contain at least one digit</li>
        <li>The password must contain at least one special character</li>
      </ul>

      <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded">
        Create Account
      </button>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <span
          onClick={onLogin}
          className="text-yellow-600 cursor-pointer font-medium"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
