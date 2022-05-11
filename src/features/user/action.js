import axios from "../../utils/axios";
import { message } from "antd";
import { setLoading, setUsers } from "./userSlice";

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/user");
    dispatch(setUsers(data.users));
    setLoading(false);
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
