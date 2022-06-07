import axios from "axios";

export default async function displayMenu({ name }: { name: string }) {
  const res = await axios.get(process.env.BACKEND_API_URL + "/api/menus/header");

  return !!res?.data?.error ? res.data : { data: res?.data };
}
