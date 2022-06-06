import { List, Item } from "./component.list.style";

export default function ComponentList({ items, type }: { items: JSX.Element[]; type: ListTypeEnum }) {
  return (
    <List type={type}>
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
