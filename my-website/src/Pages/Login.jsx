import React, { useState } from "react";
import { useCollegeContext } from "../Context/Context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { axios, setToken } = useCollegeContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin/login", {
        username,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.token}`;

        toast.success("Admin login successful");
        navigate("/admin/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full text-sm bg-emerald-50 text-emerald-600 font-semibold mb-4">
            Admin Access
          </span>

          <h1 className="text-3xl font-black text-slate-900">
            Admin Login
          </h1>

          <p className="text-slate-500 mt-2 text-sm">
            Sign in to manage the college portal
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold mb-1 text-slate-700">
              Admin Email / Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter admin email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1 text-slate-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="text-right text-sm">
            <span className="text-emerald-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-emerald-100"
          >
            Login
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-8">
          © {new Date().getFullYear()} College Admin Panel
        </p>
      </div>
    </div>
  );
};

export default Login;
