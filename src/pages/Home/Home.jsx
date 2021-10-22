import { useEffect } from "react";
import styles from "./Home.module.css";
import { selectProfile } from "../../slices/profileSlice/";
import { useSelector } from "react-redux";
import Input from "../../components/Input/";
import useCheckFields from "../../hooks/checkFields";
import { useHistory } from "react-router-dom";
import { set } from "../../utils/sessionStorageUtils";

const Home = (props) => {
  const profileInfo = useSelector(selectProfile);
  const { password, login } = profileInfo;
  const { fieldValid = false, checkFields } = useCheckFields({
    login,
    password,
  });
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    set("---authentified---", true);
    history.push("/profile");
  };
  useEffect(() => {
    set("---authentified---", false);
    return () => {};
  }, []);
  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onChange={checkFields}
        onSubmit={submit}
        autoComplete="off"
      >
        <Input
          type="text"
          name="login"
          id="login"
          placeholder="Логин"
          required={true}
          className={styles.form__input}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          required={true}
          className={styles.form__input}
        />
        <button
          type="submit"
          className={styles.form__submit}
          disabled={!fieldValid}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Home;
