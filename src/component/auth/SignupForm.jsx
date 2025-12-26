const SignupForm = ({ onSwitch }) => {
  return (
    <div className="ml-10 mr-10">
      <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

      <div className="">
        <label htmlFor="first-name">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="first-name"
          required
          placeholder="First Name"
          className="w-full border border-orange-500 px-3 py-2 mb-4 rounded"
        />
        <label htmlFor="last-name">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="last-name"
          placeholder="Last Name"
          className="w-full border  border-orange-500 px-3 py-2 mb-4  rounded"
        />
      </div>

      <label htmlFor="email">
        Email or Phone <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="email"
        placeholder="Email or Phone"
        className="w-full border  border-orange-500 px-3 py-2 mb-4 rounded"
      />
      <div className=" ">
        <label htmlFor="create-password">
          Create Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="create-password"
          placeholder="Enter Password"
          className="w-full border  border-orange-500 px-3 py-2 mb-4 rounded"
        />
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

      <ul className=" ml-6 mr-6 mb-3 list-disc pl-5  text-[10px] text-gray-600">
        <li>The password must contain at least one lowercase letter</li>
        <li>The password must contain at least one uppercase letter</li>
        <li>The password must be between 8 and 24 characters in length</li>
        <li>The password must contain at least one digit</li>
        <li>The password must contain at least one special character</li>
      </ul>

      <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded">
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
