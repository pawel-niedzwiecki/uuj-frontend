import axios from "axios";

export async function displayContactOnBackEnd({ numberPhones = false, email = false, socialMedia = false, mainAddress = false, branches = false }: { numberPhones?: boolean; email?: boolean; socialMedia?: boolean; mainAddress?: boolean; branches?: boolean }) {
  console.log(`/api/contact?${numberPhones ? `&populate=number_phones` : ""}${email ? `${numberPhones && "&"}populate=e_mail` : ""}${socialMedia ? `${(email || numberPhones) && "&"}populate=social_media` : ""}`);
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/contact?${numberPhones ? `populate=number_phones` : ""}${email ? `${numberPhones ? "&" : ""}populate=e_mail` : ""}${socialMedia ? `${email || numberPhones ? "&" : ""}populate=social_media` : ""}${
        mainAddress ? `${socialMedia || email || numberPhones ? "&" : ""}populate=main_address` : ""
      }${branches ? `${socialMedia || email || numberPhones ? "&" : ""}populate=branches` : ""}`
  );
  return !!res?.data?.error ? res.data : res?.data;
}
