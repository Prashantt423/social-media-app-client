import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "https://peaceful-ridge-12992.herokuapp.com/api/auth/login",
      userCredential
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (e) {
    dispatch({ type: "LOGIN_FAILURE", payload: e });
  }
};
