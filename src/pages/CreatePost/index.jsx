import { useState } from "react";
import { Input } from "../../components/Inputs";
import styles from "./styled.module.css";
export function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, sertFormError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar post </h2>
      <p>Write about you</p>
      <form onSubmit={handleSubmit}>
        <label>
          <Input
            span="title"
            type="text"
            name="title"
            required
            placeholder="write title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <Input
            span="Image URL"
            type="text"
            name="title"
            required
            placeholder="Upload image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <Input
            span="title"
            type="text"
            name="title"
            required
            placeholder="write title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>conteudo do post</span>
          <textarea
            name="body"
            required
            placeholder="insira o conteudo"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <Input
            span="Tags"
            type="text"
            name="tags"
            required
            placeholder="write title"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {/* {!load && <Button className="btn" textbox="Register" />}
      {load && <Button className="btn" textbox="aguarde..." disabled />}
      {error && <p className="error"> {error}</p>} */}
      </form>
    </div>
  );
}
