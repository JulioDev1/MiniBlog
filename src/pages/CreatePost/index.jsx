import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Inputs";
import { useAuthValue } from "../../context/authContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

import { useNavigate } from "react-router-dom";

import styles from "./styled.module.css";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("a imagem precisa de url");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("por-favor preencha o formulario !");
    }

    if (formError) return;
    console.log("submitado");
    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
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
        {!response.loading && <Button className="btn" textbox="Create Post" />}
        {response.loading && (
          <Button className="btn" textbox="aguarde..." disabled />
        )}
        {response.error && <p className="error"> {response.error}</p>}
        {formError && <p className="error"> {formError}</p>}
      </form>
    </div>
  );
}
