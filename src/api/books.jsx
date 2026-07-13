import axios from "axios";
const API = import.meta.env.VITE_API_URL;


export async function getBooks() {
  try {
    const { data } = await axios.get(`${API}/books`);
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
