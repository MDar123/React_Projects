import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register h-screen w-full flex justify-center items-center">
      <div className="register-card w-96 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
          Register
        </h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-lg" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Example: john.doe@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-lg" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-lg" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
            <Link to="/signin" className="text-sm text-gray-500">
              Already have an account? <Link to="/signin">Sign In</Link>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}