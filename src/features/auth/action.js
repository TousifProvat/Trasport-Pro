import axios from "../../utils/axios";
import { setAuth, setLoading } from "./authSlice";
import { notification } from "antd";

export const authSignin = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post("/auth/signin", credentials);
    localStorage.setItem("transport-token", data.token);
    localStorage.setItem("transport-user", JSON.stringify(data.user));
    dispatch(
      setAuth({
        isAuthenticated: true,
        user: data.user,
        token: data.token,
      })
    );
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    notification.error({ message: err.response.data.message });
  }
};
export const authSignOut = () => (dispatch) => {
  localStorage.removeItem("transport-token");
  localStorage.removeItem("transport-user");
  dispatch(
    setAuth({
      isAuthenticated: false,
      user: {},
      token: "",
    })
  );
};

export const isUserAutheticated = () => (dispatch) => {
  let token = localStorage.getItem("transport-token");
  let user = localStorage.getItem("transport-user");
  if (token && user) {
    dispatch(
      setAuth({
        isAuthenticated: true,
        user: JSON.parse(user),
        token: token,
      })
    );
  } else {
    dispatch(
      setAuth({
        isAuthenticated: false,
        user: {},
        token: "",
      })
    );
  }
};
