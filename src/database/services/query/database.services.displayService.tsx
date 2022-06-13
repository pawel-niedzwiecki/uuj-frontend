import axios from "axios";

export async function displayServiceOnBackend({ id }: { id: number }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/services/${id}?populate=cover&populate=why_we_cover&populate=what_we_can_for_you_made_cover&populate=Advantages&populate=branch&populate=branch.number_phone&populate=faqs&populate=ratings&populate=ratings.cover&populate=ratings.ratings&populate=ratings.ratings.cover&populate=category&populate=history`
  );

  return res.data;
}
