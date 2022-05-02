import axios from "../../utils/axios";
import { setLoading, setTrailers } from "./trailerSlice";
import { message } from "antd";

export const fetchTrailers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/trailer");
    dispatch(setTrailers(data.trailers));
    setLoading(false);
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
