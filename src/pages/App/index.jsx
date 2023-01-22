import { AuthProvider } from "../../context/authContext";

import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import "./styled.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { About } from "../About";
import { Home } from "../Home";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Login } from "../Login";
import { Register } from "../Register";
import { CreatePost } from "../CreatePost";
import { DashBoard } from "../DashBoard";
import { Search } from "../Search";
import { Post } from "../Post/Index";

export function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>carregando</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate path="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate path="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <DashBoard /> : <Navigate path="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
