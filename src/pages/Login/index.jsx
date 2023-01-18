import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Inputs";
import styles from "./styled.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, error: authError, load } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
    console.log(res);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.login}>
      <h1>login in your account</h1>
      <form onSubmit={handleSubmit}>
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
        {!load && <Button className="btn" textbox="Register" />}
        {load && <Button className="btn" textbox="aguarde..." disabled />}
        {error && <p className="error"> {error}</p>}
      </form>
    </div>
  );
}
