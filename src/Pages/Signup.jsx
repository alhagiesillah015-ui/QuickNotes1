import React, { useState } from "react";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMsg("");

    try {
    
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    
      await updateProfile(userCredential.user, {
        displayName: name,
      });

    
      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        name: name,
        email: email,
        createdAt: new Date(),
      });

      setMsg("✅ Account created successfully.");

      
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="card">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          {loading ? "..." : "Create Account"}
        </button>
      </form>

      {msg && <p className="msg">{msg}</p>}

      <p className="small">
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  
  );
}

export default Signup;