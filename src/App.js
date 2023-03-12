import AppRoute from "routes/AppRoute";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { profileUser } from "services/userService";
import { setProfile } from "redux/slice/userSlice";
function App() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const getProfile = async () => {
    const cookie = cookies.get("jwt");
    const profile = await profileUser(cookie).then((res) => res.json());
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
