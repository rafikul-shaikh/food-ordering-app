const ForgotPasswordForm = ({ onBack }) => {
  return (
    <>
      <p className="text-sm text-gray-600 mb-4">
        Enter your registered email or phone number. We’ll send you a password
        reset link.
      </p>

      <label>
        Email or Phone Number <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="w-full border border-orange-500 px-3 py-2 mt-1 mb-4 rounded-lg"
        placeholder="Enter email or phone"
      />

      <button className="w-full bg-yellow-500 text-white py-2 rounded">
        Send Reset Link
      </button>

      <p className="text-sm text-center mt-4">
        Remembered your password?{" "}
        <span
          onClick={onBack}
          className="text-yellow-600 cursor-pointer font-medium"
        >
          Back to Sign In
        </span>
      </p>
    </>
  );
};

export default ForgotPasswordForm;
