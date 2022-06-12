import axios from "axios";

export async function displayServiceOnBackend({ id }: { id: number }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/services/${id}?populate=cover&populate=Advantages&populate=branch&populate=faqs&populate=ratings&populate=category&populate=history`);

  return res.data;
}
