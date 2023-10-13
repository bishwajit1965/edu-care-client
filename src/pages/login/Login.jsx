import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user, loading, handleGoogleSignIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    handleGoogleSignIn()
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleLogin = (event) => {
    event.preventDefault();
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Helmet title="Edu care || Login" />
      <div className="flex justify-center">
        {loading && <span className="loading loading-ring loading-lg"></span>}
      </div>

      <div className="lg:w-3/12 mx-auto flex justify-center items-center min-h-[calc(100vh-6rem)]">
        <div className="border p-6 w-full rounded-md shadow-lg bg-base-200">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">Log in</h1>
          <form onSubmit={handleLogin} className="w-full space-y-2">
            <input
              type="email"
              name="email"
              placeholder="Email...."
              className="input input-bordered input-sm w-full"
            />
            <div className="password-container w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password..."
                className="input input-bordered input-sm w-full "
                required
              />
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="">
              {error && (
                <p className="text-xs text-red-500"> {error.toString()}</p>
              )}
              {success && (
                <p className="text-xs text-blue-500"> {success.toString()}</p>
              )}
            </div>
            <div className="">
              <span className="text-xs text-indigo-800">
                New to this site ?{" "}
              </span>
              <Link
                to="/register"
                className="text-xs hover:underline text-indigo-500 m-0"
              >
                Register
              </Link>
            </div>
            <div className="">
              <span className="text-xs text-indigo-800">Forgot password ?</span>{" "}
              <Link
                onClick={handleResetPassword}
                className="text-xs hover:underline text-indigo-500 m-0"
              >
                Reset password
              </Link>
            </div>
            <button className="btn btn-sm w-full capitalize btn-primary">
              Login
            </button>
          </form>
          <div className="divider">OR</div>
          <p className="flex justify-center text-xs">
            Login with Google or GitHub
          </p>
          <div className="flex justify-between my-4">
            <div className="btn btn-circle btn-outline">
              <Link onClick={handleGoogleLogIn}>
                <FaGoogle />
              </Link>
            </div>
            <div className="btn btn-circle btn-outline">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
