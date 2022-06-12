import axios from "axios";

export async function displayListNewsPageOnBackEnd({ seo = false, faqs = false, slider = false, raitings = false }: { seo?: boolean; faqs?: boolean; slider?: boolean; raitings?: boolean }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/news-list?${seo ? `populate=seo` : ""}`);
  return !!res?.data?.error ? res.data : res?.data;
}
