import { Input } from "../../components/Inputs";
import styles from "./styled.module.css";

import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocument";

import { PostDetails } from "../../components/PostDetails";

export function Home() {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  }

  return (
    <div className={styles.home}>
      <h1>see the most recent recent posts</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <Input
          type="text"
          placeholder="search for tags"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="btn btn-dark">search</button>
      </form>
      <div>
        {loading && <p>Carregando</p>}

        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div>
            <p>post not found</p>
            <Link to="/posts/create" className="btn">
              create post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
