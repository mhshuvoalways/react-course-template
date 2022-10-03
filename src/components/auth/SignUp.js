import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ modalHandler }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="flex justify-between md:flex-nowrap flex-wrap">
      <div className="color1-bg p-5 md:w-5/12 w-full text-white flex md:items-center items-start justify-between">
        <div className="space-y-10">
          <p className="text-3xl">Welcome Back</p>
          <p className="border-2 border-yellow-500 w-4/12"></p>
          <p className="text-xl">Sign in to continue ​to your account.</p>
        </div>
        <div className="md:hidden block">
          <i
            className="fas fa-times cursor-pointer"
            onClick={() => modalHandler("")}
          />
        </div>
      </div>
      <div className="w-full md:w-7/12 p-5 text-center">
        <div className="md:flex justify-end items-start hidden">
          <i
            className="fas fa-times cursor-pointer"
            onClick={() => modalHandler("")}
          />
        </div>
        <div className="space-y-3 p-5 font-semibold">
          <div className="border border-gray-900 p-3 w-full flex items-center sm:gap-10 gap-2 rounded-md">
            <i class="fa-brands fa-facebook text-3xl text-blue-600"></i>
            <p>Continue with Facebook</p>
          </div>
          <div className="border border-gray-900 p-3 w-full flex items-center sm:gap-10 gap-2 rounded-md">
            <i class="fa-brands fa-google text-3xl text-red-500"></i>
            <p>Continue with Google</p>
          </div>
          <div className="border border-gray-900 p-3 w-full flex items-center sm:gap-10 gap-2 rounded-md">
            <i class="fa-brands fa-apple text-3xl"></i>
            <p>Continue with Apple</p>
          </div>
          <div className="flex items-center gap-5 justify-between">
            <p className="w-5/12 border-gray-500 border"></p>
            <p>or</p>
            <p className="w-5/12 border-gray-500 border"></p>
          </div>
          <div className="space-y-3">
            <p
              className="text-blue-700 font-bold cursor-pointer"
              onClick={() => setShowInput(true)}
            >
              Sign Up Using Email
            </p>
            {showInput && (
              <div className="space-y-3">
                <div className="flex gap-3 flex-wrap md:flex-nowrap">
                  <input
                    type="text"
                    className="appearance text-gray-600 focus:ring focus:outline-0 rounded border p-2 w-full shadow-sm"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="appearance text-gray-600 focus:ring focus:outline-0 rounded border p-2 w-full shadow-sm"
                    placeholder="Last name"
                  />
                </div>
                <input
                  type="text"
                  className="appearance text-gray-600 focus:ring focus:outline-0 rounded border p-2 w-full shadow-sm"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  className="appearance text-gray-600 focus:ring focus:outline-0 rounded border p-2 w-full shadow-sm"
                  placeholder="Password"
                />
                <p className="text-xs text-left">
                  Password must be at least 8 characters long.
                </p>
                <Link to="/account">
                  <p className="bg-green-400 p-2 text-center rounded-md w-full my-5">
                    Sign Up
                  </p>
                </Link>
              </div>
            )}
            <div className="flex items-center gap-2 justify-center pb-5">
              <p>Already a member?</p>
              <p
                className="text-blue-700 font-bold cursor-pointer hover:underline"
                onClick={() => modalHandler("login")}
              >
                Sign In
              </p>
            </div>
            <p className="border border-gray-500 w-full"></p>
            <p className="text-sm pt-5">
              By signing up you agree to Skillshare's
              <strong>Terms of Service</strong> and Privacy Policy. This page is
              protected by reCAPTCHA and is subject to Google's Terms of Service
              and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
