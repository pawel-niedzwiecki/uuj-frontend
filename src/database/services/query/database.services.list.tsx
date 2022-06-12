import axios from "axios";

export async function displayServicesListOnBackend({ page = 1 }: { page?: number }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/services?pagination[pageSize]=9&pagination[page]=${page}`);

  return !!res?.data?.error ? res.data : res?.data;
}
