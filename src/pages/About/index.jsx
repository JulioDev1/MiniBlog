import { Link } from "react-router-dom";
import styles from "./styled.module.css";
export function About() {
  return (
    <div className={styles.about}>
      <h2>
        About the Mini<span>blog</span>
      </h2>
      <p>
        this project consist being a blog use react in front end and firebase in
        back-end
      </p>
      <Link to="/create/post" className="btn">
        Criar post
      </Link>
    </div>
  );
}
