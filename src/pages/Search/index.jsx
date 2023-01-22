import { Link } from "react-router-dom";
import { PostDetails } from "../../components/PostDetails";
import { useFetchDocuments } from "../../hooks/useFetchDocument";
import { useQuery } from "../../hooks/useQuery";
import styles from "./styled.module.css";
export function Search() {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.searchContainer}>
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>posts not found</p>
            <Link to="/" className="btn btn-dark">
              Back
            </Link>
          </>
        )}

        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
}
