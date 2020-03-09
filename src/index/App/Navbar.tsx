import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="flex flex-row items-center justify-between bg-indigo-600 p-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" class="ml-4 font-semibold text-xl tracking-tight">
          FPMS Rules
        </Link>
      </div>
      <div class="w-full flex-grow flex items-center lg:w-auto">
        <div class="text-sm flex-grow">
          <Link to="/" class="mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link to="/request" class="mt-0 text-teal-200 hover:text-white mr-4">
            Request
          </Link>
          <Link to="/history" class="mt-0 text-teal-200 hover:text-white mr-4">
            History
          </Link>
        </div>
        <Link
          to="login"
          class="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-0"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
