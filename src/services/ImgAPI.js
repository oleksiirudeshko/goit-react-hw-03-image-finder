import axios from "axios";

const API_KEY = "18811759-45b623fd978c0dc08d4086f4a";
axios.defaults.baseURL = "https://pixabay.com/api";
const imgApi = ({ searchQuery = "", currentPage = 1, pageSize = 10 }) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default { imgApi };
