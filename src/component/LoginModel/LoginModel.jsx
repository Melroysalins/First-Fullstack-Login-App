import React, { useState } from "react";

const LoginModel = () => {
  const [islogin, setIsLogin] = useState(false);
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, Setpassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    console.log({ email, password, fullname, username });
  };

  return (
    <div className="LoginModal">
      <p style={{ fontWeight: "700", fontSize: "20px" }}>
        {!islogin ? "Register" : "Login"}
      </p>

      <div className="InputBoxContainners">
        {!islogin && (
          <input
            type="text"
            placeholder="Enter Fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{ padding: "10px", width: "250px", cursor: "pointer" }}
          onClick={() => handleRegister()}
        >
          {!islogin ? "Register" : "Login"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p className="register" onClick={() => setIsLogin(!islogin)}>
          {islogin ? "New User ? Register !!" : "Already a user ? Login"}
        </p>
      </div>
    </div>
  );
};

export default LoginModel;
