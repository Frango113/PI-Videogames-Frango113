import { useDispatch } from "react-redux";
import { getAllVGames, paginado, removeAllFilter } from "../../redux/actions";
import style from "./nav.module.css";

const Reload = () => {
  const dispatch = useDispatch();

  const imgReload = "https://cdn-icons-png.flaticon.com/128/748/748090.png";

  const reload = (e) => {
    e.preventDefault();
    dispatch(getAllVGames());
    dispatch(removeAllFilter());
    dispatch(paginado(1));
  };
  return (
    <>
      <button
        onClick={(event) => reload(event)}
        className={style.btnReload}
        title="reload"
      >
        <img src={imgReload} alt="reload" className={style.imgReload} />
      </button>
    </>
  );
};

export default Reload;
