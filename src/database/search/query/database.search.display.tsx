import axios from "axios";

export async function searchOnBackend({ query }: { query: string }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/fuzzy-search/search?query=${query}`);

  return !!res?.data?.error ? res.data : { data: res?.data };
}

export async function searchOnFrontEnd({ query }: { query: string }) {
  const res = await axios.get(`/api/search/${query}`);

  return !!res?.data?.error ? res.data : { data: res?.data };
}
