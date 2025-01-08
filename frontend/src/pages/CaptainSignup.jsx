import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      password: password,
      email: email,
    });
    setEmail("");
    setfirstName("");
    setlastName("");
    setPassword("");
  };

  return (
    <div>
      <div>
        <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img className="w-32 mb-10" src="/src/assets/logo.png" alt="Logo" />
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <h3 className="text-lg font-medium mb-2">
                What's our captain name{" "}
              </h3>
              <div className="flex gap-2 mb-5">
                <input
                  type="text"
                  required
                  className="bg-[#eeeeee]  rounded px-4 py-2 border  text-lg placeholder:text-base w-1/2"
                  placeholder="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                />

                <input
                  type="text"
                  required
                  className="bg-[#eeeeee] rounded px-4 py-2 border  text-lg placeholder:text-base w-1/2"
                  placeholder="lastName"
                  value={lastName}
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
              </div>

              <h3 className="text-lg font-medium mb-2">
                What's our captain email
              </h3>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                placeholder="email@example.com"
              />
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                type="password"
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="bg-[#111] text-white font-semibold  mb-7 rounded px-4 py-2  w-full text-base placeholder:text-sm">
                Sign Up
              </button>
            </form>
            <p className="text-center">
              Already have a account ?{" "}
              <Link to="/captain-login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[10px] leading-tight">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy</span> and{" "}
              <span className="underline">Terms of Service apply</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
