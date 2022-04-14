import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/UserSlice";
import Cookies from "universal-cookie";
import axios from "axios";
import { Base64 } from "js-base64";
import { Axios } from "../Helper/axios";

export default function useHandleLogin() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (res) => {
    // const API_URL = "https://hoqobajoe.herokuapp.com";
    let userData = {
      ...res,
    };
    delete userData.token;
    // const config = {
    //   headers: {
    //     Authorization: "Bearer " + res.token,
    //   },
    // };
    await Axios
      .get(`/login`)
      .then((resp) => {
        console.log(resp);
        userData.id = resp.data.data.id;
        userData.name = resp.data.data.name;
        userData.email = resp.data.data.email;
        userData.role = resp.data.data.role;
      })
      .catch(() => {
        userData.id = 0;
        userData.name = "";
        userData.email = "";
        userData.role = "";
      });

    const hash = Base64.encode(res.token);
    cookies.set("token", hash, {
      path: "/",
      domain: window.location.hostname,
    });
    dispatch(login(userData));
    navigate("/dashboard");
  };
  return handleLogin;
}
