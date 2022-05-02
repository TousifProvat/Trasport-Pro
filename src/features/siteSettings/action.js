import axios from "../../utils/axios";
import { setLoading, setSettings, updateSettings } from "./siteSettingsSlice";
import { message, notification } from "antd";

export const fetchSettings = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/company");
    dispatch(setSettings(data.company));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    message.error(err.response.data.message);
    console.log({ err });
  }
};

export const updateSiteSettings = (id, values) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.put(`/company/${id}`, values);
    notification.success({ message: res.data.message });
    dispatch(updateSettings(values));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    notification.error({
      message: err.response.data.message,
    });
  }
};
