import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { KeyRound } from "lucide-react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className=" w-full max-w-md p-8  ">
        <div className="flex justify-center mb-4 rounded-full ">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
            <KeyRound />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2">
          Forgot password?
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          No worries, we’ll send you reset instructions.
        </p>

        <label className="block text-sm mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 px-3 py-2 mb-4 rounded-lg"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Reset Password
        </button>

        <div className="text-center mt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-bold hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
