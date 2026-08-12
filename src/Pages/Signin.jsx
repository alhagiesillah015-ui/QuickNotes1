import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
    const userCredential=  await
    signInWithEmailAndPassword(auth, email,
       password);
       console.log("User Signed In:", userCredential.
        user)

      setMsg("✅ Sign In successfull..");
      setEmail("");
      setPassword("");

    } catch (err) {
      setMsg(err.message);
      console.log(err.code);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="card">
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "..." : "Sign In"}
        </button>
      </form>

      {msg && <p className="msg">{msg}</p>}

      <p className="small">
        Are You new here? <a href="/signup">Sign Up</a>
      </p>
    </div>

  
  );
}

export default Signin;