import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label>
        Пошук мага:
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(setNameFilter(e.target.value))}
          placeholder="Введіть ім'я мага"
        />
      </label>
    </div>
  );
}
