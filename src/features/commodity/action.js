import axios from "../../utils/axios";
import { message } from "antd";
import { setCommodities, setLoading } from "./commoditySlice";

export const fetchCommodities = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/commodity");
    dispatch(setCommodities(data.commodities));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
