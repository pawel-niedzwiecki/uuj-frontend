import { Style } from "util";
import { List } from "./component.list.style";

export default function ComponentList({ children, type, style }: { children?: any; type: ListTypeEnum; style?: {} }) {
  return (
    <List type={type} style={style}>
      {children}
    </List>
  );
}

export enum ListTypeEnum {
  level = "level",
  vertical = "vertical",
}
