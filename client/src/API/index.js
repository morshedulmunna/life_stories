import axios from "axios";

const url = `http://localhost:8080/posts`;

export const fatchPosts = () => axios.get(url);
