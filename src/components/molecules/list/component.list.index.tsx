import { Style } from "util";
import { List } from "./component.list.style";

export default function ComponentList({ children, className, type, style }: { children?: any; className?: string; type: ListTypeEnum; style?: {} }) {
  return (
    <List type={type} style={style} className={className}>
      {children}
    </List>
  );
}

export enum ListTypeEnum {
  level = "level",
  vertical = "vertical",
}
