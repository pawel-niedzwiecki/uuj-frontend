import axios from "axios";

export default async function displayNewsList({ page = 1, cover = false, category = false, author = false }: { page?: number; cover: boolean; category?: boolean; author: boolean }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/news?pagination[pageSize]=9&pagination[page]=${page < 1 ? 1 : page}${cover ? `&populate=cover` : ""}${category ? `&populate=category` : ""}${author ? `&populate=author&populate=author.avatar` : ""}`);

  return !!res?.data?.error ? res.data : res?.data;
}
