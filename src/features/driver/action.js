import axios from "../../utils/axios";
import { message } from "antd";
import { setDrivers, setLoading } from "./driverSlice";

export const fetchDrivers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/driver");
    dispatch(setDrivers(data.drivers));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
