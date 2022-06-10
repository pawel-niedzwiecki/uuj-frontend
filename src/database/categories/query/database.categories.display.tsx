import axios from "axios";
import { CategoryTypeEnum } from "../types/database.categories.types";

export default async function displayCategory({ type, cover = false, services = false }: { type?: CategoryTypeEnum; cover?: boolean; services?: boolean }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/categories?pagination[pageSize]=25${type ? `&filters[type][$eq]=${type}` : ""}${cover && `&populate=cover`}${services && `&populate=services`}`);

  return !!res?.data?.error ? res.data : res?.data;
}
