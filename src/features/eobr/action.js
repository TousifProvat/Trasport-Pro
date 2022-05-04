import axios from "../../utils/axios";
import { message } from "antd";
import { setEobrs, setLoading } from "./eobrSlice";

export const fetchEobrs = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/eobr");
    dispatch(setEobrs(data.eobrs));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
