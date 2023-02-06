import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = ({ isValidCred }) => {
  const navigate = useNavigate();
  const temp = "";
  useEffect(() => {
    if (!isValidCred) {
      navigate("/", { replace: true });
    }
  }, []);

  if (!isValidCred) {
    return <p>{temp}</p>;
  }
  return <div>Welcome</div>;
};

export default Welcome;
