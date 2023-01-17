import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuthentication() {
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "a senha precisa conter pelo menos 6 cacteres";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "e-mail ja cadastrado";
      } else {
        systemErrorMessage = "Ocorreu erro, por favor tente mais tarde";
      }
      setLoading(false);

      setError(systemErrorMessage);
    }
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return {
    auth,
    createUser,
    error,
    load,
  };
}
