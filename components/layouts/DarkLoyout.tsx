import React, { FC } from "react";

type DarkLoyoutProps = {
  children: React.ReactNode;
};

const DarkLoyout: React.FC<DarkLoyoutProps> = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLoyout;
