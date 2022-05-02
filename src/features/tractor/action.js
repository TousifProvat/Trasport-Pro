import axios from "../../utils/axios";
import { message } from "antd";
import { setLoading, setTractors } from "./tractorSlice";

export const fetchTractors = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/tractor");
    dispatch(setTractors(data.tractors));
    setLoading(false);
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
