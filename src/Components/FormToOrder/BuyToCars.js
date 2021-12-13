import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Login from "../Auth/Firebase/Login";
import Buy from "./Buy";

const BuyToCars = () => {
  const { user } = useAuth();

  return (
    <div>
      {!user.email ? (
        <>
          <Login />
        </>
      ) : (
        <Buy />
      )}
    </div>
  );
};

export default BuyToCars;
