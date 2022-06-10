import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  position: relative;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
`;

export const Header = styled.h2`
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
`;

export const Aricle = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostPrimmaryBg};
`;

export const AricleCover = styled.div`
  width: 100%;
  height: 20rem;
  display: block;
  overflow: hidden;
  position: relative;
`;

export const AricleTitle = styled.h4`
  width: 100%;
  display: block;
  text-align: left;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const AricleAuthorAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  margin-left: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  border: 0.2rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorBorder};
`;

export const AricleAuthorDataBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 5.5rem);
  padding-left: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
`;

export const AricleAuthorName = styled.h5`
  width: 100%;
  display: block;
  text-align: left;
`;

export const AricleDateAdds = styled.p`
  width: 100%;
  display: block;
  text-align: left;
  font-size: 1.2rem;
`;

export const ArticleQuote = styled.p`
  width: 100%;
  display: block;
  text-align: left;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const More = styled.div`
  width: 100%;
  display: block;
  text-align: right;
  font-weight: bold;
  padding: 0 ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main} ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main} 0;
`;
