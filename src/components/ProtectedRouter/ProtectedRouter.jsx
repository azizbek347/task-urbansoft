import { Route, Redirect } from "react-router-dom";
import { get } from "../../utils/sessionStorageUtils";
const ProtectedRouter = ({ component: Component, ...restOfProps }) => {
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        get("---authentified---") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

export default ProtectedRouter;
