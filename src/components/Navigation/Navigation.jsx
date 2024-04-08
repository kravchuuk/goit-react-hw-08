import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {!isRefreshing && (
        <div>
          {isLoggedIn && (
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}
