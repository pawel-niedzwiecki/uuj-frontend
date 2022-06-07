import { Style } from "util";
import { List, Item } from "./component.list.style";

export default function ComponentList({ items, type, style }: { items: JSX.Element[]; type: ListTypeEnum; style?: {} }) {
  return (
    <List type={type} style={style}>
      {items.map((item: JSX.Element, i: number) => (
        <Item key={i}>{item}</Item>
      ))}
    </List>
  );
}

export enum ListTypeEnum {
  level = "level",
  vertical = "vertical",
}
