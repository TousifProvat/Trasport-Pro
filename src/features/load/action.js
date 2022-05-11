import axios from "../../utils/axios";
import { setLoading, setLoads } from "./loadSlice";
import { message } from "antd";

export const fetchLoads = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/load");
    dispatch(setLoads(data.loads));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
