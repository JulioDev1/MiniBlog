import styles from "./styled.module.css";

import { useParams } from "react-router-dom";

export function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
