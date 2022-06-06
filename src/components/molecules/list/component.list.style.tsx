import styled from "styled-components";
import { ListTypeEnum } from "./component.list.index";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

interface ListyType {
  type: string;
}

export const List = styled.ul<ListyType>`
  display: flex;
  flex-direction: column;

  li {
    padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
    width: ${({ type }) => (type === ListTypeEnum.vertical ? "100%" : "max-content")};
  }
`;

export const Item = styled.li``;
