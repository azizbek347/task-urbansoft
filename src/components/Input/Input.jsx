import styles from "./Input.module.css";

const Input = ({ ...restProps }) => {
  return (
    <label htmlFor={restProps?.id} className={styles.label}>
      <input {...restProps} />
    </label>
  );
};

export default Input;
