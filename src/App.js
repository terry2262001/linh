import AppRoute from "routes/AppRoute";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { profileUser } from "services/userService";
import { setProfile } from "redux/slice/userSlice";
function App() {
  const location = useLocation();
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const getProfile = async () => {
    const cookie = cookies.get("jwt");
    const profile = await profileUser(cookie);
    if (profile) {
      dispatch(setProfile(profile.data));
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <AppRoute></AppRoute>
    </>
  );
}

export default App;
