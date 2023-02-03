import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      navigate("/", { replace: true });
    }, 3000);
  }, []);
  return <div>Welcome</div>;
};

export default Welcome;
