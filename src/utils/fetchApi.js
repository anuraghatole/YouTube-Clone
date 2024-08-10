import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyDkmqVCmIonn5eMj00VxCvtFsv_nDvZUvg";

export const fetchApiForYoutubeData = async (endpoints, params = {}) => {
  try {
    const responce = await axios.get(`${BASE_URL}/${endpoints}`, {
      params: {
        ...params,
        key: API_KEY,
      },
    });
    console.log("this is my responce", responce.data);
    return responce.data;
  } catch (error) {
    console.log("error during fetching data from youtube", error);
  }
};
