import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPost } from "./actions/posts";
import Posts from "./components/Posts/Posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div>
      <Posts />
    </div>
  );
};

export default App;
