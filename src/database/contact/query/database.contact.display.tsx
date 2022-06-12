import axios from "axios";

export async function displayContactOnBackEnd({ numberPhones = false, email = false, socialMedia = false, mainAddress = false, branches = false, faqs = false }: { numberPhones?: boolean; email?: boolean; socialMedia?: boolean; mainAddress?: boolean; branches?: boolean; faqs?: boolean }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/contact?populate=seo${numberPhones ? `&populate=number_phones` : ""}${faqs ? `&populate=faqs` : ""}${email ? `&populate=e_mail` : ""}${socialMedia ? `&populate=social_media` : ""}${
        mainAddress ? `&populate=main_address&populate=main_address.number_phone&populate=main_address.e_mail` : ""
      }${branches ? `&populate=branches&populate=branches.number_phone&populate=branches.e_mail` : ""}`
  );
  return !!res?.data?.error ? res.data : res?.data;
}
