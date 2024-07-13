import React from "react";
import Button from "./src/components/Elements/Button";

function App() {
  return (
    <div className=" flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 tex-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          welcome, Please enter your deatails
        </p>
        <form action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              email
            </label>
            <input
              type="text"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Password"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              placeholder="**********"
            />
          </div>
          <Button color="bg-primary w-full">login </Button>
        </form>
      </div>
    </div>
  );
}
