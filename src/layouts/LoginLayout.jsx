import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
