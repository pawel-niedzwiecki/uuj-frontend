import axios from "axios";

export async function displayContactOnBackEnd({ numberPhones = false, email = false, socialMedia = false }: { numberPhones?: boolean; email?: boolean; socialMedia?: boolean }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/contact?${numberPhones ? `&populate=number_phones` : ""}${email ? `${numberPhones && "&"}populate=e_mail` : ""}${socialMedia ? `${(email || numberPhones) && "&"}populate=social_media` : ""}`);
  return !!res?.data?.error ? res.data : res?.data;
}
