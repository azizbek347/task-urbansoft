import { useSelector } from "react-redux";
import { selectProfile } from "../../slices/profileSlice/";
import styles from "./Profile.module.css";
const Profile = (props) => {
  const profile = useSelector(selectProfile);
  const { login } = profile;
  return (
    <div className={styles.wrapper}>
      <h1>{login}</h1>
    </div>
  );
};

export default Profile;
