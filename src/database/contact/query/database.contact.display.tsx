import axios from "axios";

export async function displayContact({ numberPhones = false, email = false, socialMedia = false }: { numberPhones?: boolean; email?: boolean; socialMedia?: boolean }) {
  return await axios.get(process.env.BACKEND_API_URL + `/api/contact?${numberPhones && `&populate=number_phones`}${email && `&populate=e_mail`}${socialMedia && `&populate=social_media`}`);
}
