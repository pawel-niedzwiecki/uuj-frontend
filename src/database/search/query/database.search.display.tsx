import axios from "axios";

export default async function search({ query }: { query: string }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/fuzzy-search/search?query=${query}`);

  return !!res?.data?.error ? res.data : { data: res?.data };
}
