import * as api from "../API";

// Action Creators
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fatchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
