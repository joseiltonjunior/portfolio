import axios from "axios";

const apiGitHub = axios.create({
  baseURL: "https://api.github.com",
  timeout: 20000,
});

export default apiGitHub;
