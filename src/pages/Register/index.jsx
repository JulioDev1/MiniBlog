import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Inputs";
import { useAuthentication } from "../../hooks/useAuthentication";

import styles from "./styled.module.css";

export function Register() {
  const [displayName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setpasswordConfirmed] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, load } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    };
    if (password !== passwordConfirmed) {
      setError("senha diferentes!");
      return;
    }

    const res = await createUser(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Register account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <Input
            type="text"
            span="Name:"
            name="displayName"
            required
            placeholder="user name"
            value={displayName}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <Input
            type="email"
            span="Email:"
            name="name"
            required
            placeholder="user email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <Input
            type="password"
            span="Password:"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <Input
            type="password"
            span="Confirm Password:"
            name="confirmPassword"
            required
            placeholder="Confirm your password:"
            value={passwordConfirmed}
            onChange={(e) => setpasswordConfirmed(e.target.value)}
          />
        </label>
        {!load && <Button className="btn" textbox="Register" />}
        {load && <Button className="btn" textbox="aguarde..." disabled />}
        {error && <p className="error"> {error}</p>}
      </form>
    </div>
  );
}
