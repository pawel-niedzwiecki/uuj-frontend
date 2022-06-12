import axios from "axios";

export async function displayArticleOnBackend({ id }: { id: number }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/news/${id}?populate=cover&populate=author&populate=author.avatar&populate=category`);

  return res.data;
}
