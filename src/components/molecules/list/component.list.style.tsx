import styled from "styled-components";
import { ListTypeEnum } from "./component.list.index";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

interface ListyType {
  type: string;
}

export const List = styled.ul<ListyType>`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  li {
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
    padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main} 0;
    width: ${({ type }) => (type === ListTypeEnum.vertical ? "100%" : "max-content")};
  }
`;
