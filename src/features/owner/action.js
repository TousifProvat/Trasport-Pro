import axios from "../../utils/axios";
import { setLoading, setOwners } from "./ownerSlice";
import { message } from "antd";

export const fetchOwners = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/owner");
    dispatch(setOwners(data.owners));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
