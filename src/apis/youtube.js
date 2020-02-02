import axios from "axios";
const KEY = "AIzaSyA-3nxpmuOd_DJUrCAsnBvowLUc9Iux9Jo";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
