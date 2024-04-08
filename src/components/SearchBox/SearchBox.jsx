import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selector.js";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import css from "./SearchBox.moudle.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);
  const id = nanoid();

  return (
    <div className={css.inputBox}>
      <label className={css.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={css.field}
        id={id}
        type="text"
        value={name}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
