import axios from "axios";

export async function displayHomeOnBackEnd({ seo = false, slider = false }: { seo?: boolean; slider?: boolean }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/home?${seo ? `&populate=seo` : ""}${slider ? `${seo ? "&" : ""}populate=slider&&populate=slider.Advantages` : ""}`);
  return !!res?.data?.error ? res.data : res?.data;
}
