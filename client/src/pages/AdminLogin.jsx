import React from 'react';

const AdminLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
