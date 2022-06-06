import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.break.small} 0;
  background: ${({ theme }) => theme.colorMainBg};
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
`;
