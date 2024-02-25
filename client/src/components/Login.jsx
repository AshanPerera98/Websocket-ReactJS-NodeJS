import { useState } from "react";

function Login({ onSubmit }) {
  const [username, setUsername] = useState("");
  return (
    <>
      <h1>Login</h1>
      <p>Give your name to be displayed</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(username);
        }}
      >
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
