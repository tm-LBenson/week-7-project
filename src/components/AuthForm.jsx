import React, { useState } from "react";
import { supabase } from "../supabase";
import Button from "react-bootstrap/Button";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  async function handleSignIn(e) {
    e.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(error.message);
      return
    }
    setMessage("")
  }
  async function handleSignUp(e) {
    e.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
      return;
    }
    setMessage("Account created.");
  }
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        />

        <Button onClick={handleSignIn}>Sign In</Button>
        <Button onClick={handleSignUp}>Sign Up</Button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
