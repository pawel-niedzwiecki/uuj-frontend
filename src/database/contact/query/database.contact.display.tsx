import axios from "axios";

export async function displayContactOnBackEnd({ numberPhones = false, email = false, socialMedia = false, mainAddress = false, branches = false }: { numberPhones?: boolean; email?: boolean; socialMedia?: boolean; mainAddress?: boolean; branches?: boolean }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/contact?${numberPhones ? `populate=number_phones` : ""}${email ? `${numberPhones ? "&" : ""}populate=e_mail` : ""}${socialMedia ? `${email || numberPhones ? "&" : ""}populate=social_media` : ""}${
        mainAddress ? `${socialMedia || email || numberPhones ? "&" : ""}populate=main_address&populate=main_address.number_phone&populate=main_address.e_mail` : ""
      }${branches ? `${socialMedia || email || numberPhones ? "&" : ""}populate=branches&populate=branches.number_phone&populate=branches.e_mail` : ""}`
  );
  return !!res?.data?.error ? res.data : res?.data;
}
