import { getVideogames } from "../../redux/Actions/getvgames";
import sortvgames from "../../redux/Actions/sortvgame";

export default function LandingPage() {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getVideogames());
  }, []);
  function handleSortvideogames(e) {
    dispatch(sortvgames("asc"));
  }
}
