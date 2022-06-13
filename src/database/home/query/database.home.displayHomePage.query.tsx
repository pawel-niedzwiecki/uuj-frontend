import axios from "axios";

export async function displayHomePageOnBackEnd({ seo = false, faqs = false, slider = false, ratings = false }: { seo?: boolean; faqs?: boolean; slider?: boolean; ratings?: boolean }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/home?${seo ? `populate=seo` : ""}${faqs ? `${seo ? "&" : ""}populate=faqs` : ""}${slider ? `${seo || faqs ? "&" : ""}populate=slider&populate=slider.Advantages` : ""}${
        ratings ? `${seo || slider || faqs ? "&" : ""}populate=ratings&populate=ratings.cover&populate=ratings.ratings&populate=ratings.ratings.cover` : ""
      }`
  );
  return !!res?.data?.error ? res.data : res?.data;
}
