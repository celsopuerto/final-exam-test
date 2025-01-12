import React, { useState } from "react";

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  try {
    setLoading(true);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl mb-6">Register</h1>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-96 p-2 border border-gray-300 rounded-md mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="submit"
            className="block w-96 p-2 bg-blue-500 text-white rounded-md"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
