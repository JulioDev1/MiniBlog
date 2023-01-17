import styles from "./styled.module.css";

export function Input({
  span,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
}) {
  return (
    <div className={styles.inputlabel}>
      <span>{span}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
