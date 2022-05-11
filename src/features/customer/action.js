import axios from "../../utils/axios";
import { message } from "antd";
import { setCustomers, setLoading } from "./customerSlice";

export const fetchCustomer = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/customer");
    dispatch(setCustomers(data.customers));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};
