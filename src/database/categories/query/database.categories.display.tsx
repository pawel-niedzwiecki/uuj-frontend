import axios from "axios";
import { CategoryTypeEnum } from "../types/database.categories.types";

export default async function displayCategory({ type, cover = false }: { type: CategoryTypeEnum; cover?: boolean }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/categories?${type ? `filters[type][$eq]=${type}` : ""}${cover && `${type && "&"}populate=cover`}${type === CategoryTypeEnum.services && `&populate=services`}`);

  return !!res?.data?.error ? res.data : res?.data;
}
