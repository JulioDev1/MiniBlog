import { Link } from "react-router-dom";
import styles from "./styled.module.css";
export function PostDetails({ post }) {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.img} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>{post.createBy}</p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={post.tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
}
