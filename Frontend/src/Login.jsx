import { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, form);
    setUser(res.data.user);
    window.location.href = "https://www.youtube.com";
  } catch (error) {
    setError("Login failed. Please check your credentials.");
  }
};

  return (
    <div>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <form className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-blue-500 text-white p-2 rounded-md w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;