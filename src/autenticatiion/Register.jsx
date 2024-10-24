import React from "react";
import { useState } from "react";
import quitea from "/logo.svg";
import useSignup from "../Hooks/useSignup";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // Initialize useNavigate

  let { error, loading, signup } = useSignup();

  const [regform, setRegform] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regform),
      });

      // Check if the response is OK (status in the range 200-299)
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log the success message or handle it as needed
        navigate("/"); // Parse the JSON response
      
      } else {
        const errorData = await response.json(); // Get error response
        console.error("Error:", errorData.error); // Log the error
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    // overall-login-container
    <div className="">
      {/* logocontainer */}
      <div className="  my-20 flex justify-center">
        <img
          src={quitea}
          alt="quitea-logo"
          className="w-64 h-24 flex justify-center"
        />
      </div>

      {/* Loginform */}
      <div className=" flex justify-center">
        <form onSubmit={registerUser}>
          <h2 className="flex justify-center font-bold text-2xl">Register</h2>
          <label>
            <p className="text-lg font-bold">Username</p>
            <input
              type="text"
              name="username"
              value={regform.username}
              onChange={(e) =>
                setRegform({ ...regform, username: e.target.value })
              }
              placeholder="enter your username"
              className="border-4 rounded-lg border-[#295F98] p-1"
            />
          </label>
          <hr className="py-3" />
          <label>
            <p className="text-lg font-bold">Email</p>
            <input
              type="email"
              name="email"
              value={regform.email}
              onChange={(e) =>
                setRegform({ ...regform, email: e.target.value })
              }
              placeholder="enter your email"
              className="border-4 rounded-lg border-[#295F98] p-1"
            />
          </label>
          <hr className="py-3" />
          <label>
            <p className="text-lg font-bold">Password</p>
            <input
              type="password"
              name="password"
              value={regform.password}
              onChange={(e) =>
                setRegform({ ...regform, password: e.target.value })
              }
              placeholder="password"
              className="border-[#295F98] border-4 rounded-lg p-1"
            />
          </label>

          <hr className="py-3" />
          <div className="flex justify-center ">
            <button
              type="submit"
              value="Register"
              className="flex items-center cursor-pointer border-2 bg-[#295F98] text-white px-4 py-2 rounded-xl font-jua"
            >
              {loading && (
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Register
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
