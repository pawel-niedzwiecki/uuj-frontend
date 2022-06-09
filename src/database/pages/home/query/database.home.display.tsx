import axios from "axios";

export async function displayHomeOnBackEnd({ seo = false, slider = false, raitings = false }: { seo?: boolean; slider?: boolean; raitings?: boolean }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/home?${seo ? `&populate=seo` : ""}${slider ? `${seo ? "&" : ""}populate=slider&&populate=slider.Advantages` : ""}${raitings ? `${seo || slider ? "&" : ""}populate=raitings&populate=raitings.cover&populate=raitings.ratings&populate=raitings.ratings.cover` : ""}`
  );
  return !!res?.data?.error ? res.data : res?.data;
}
