import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;

  position: relative;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
`;

export const Article: StyledComponent<any, any> = styled.article`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 0.6rem;
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostPrimmaryBg};
`;

export const Cover = styled.div`
  width: 100%;
  height: 30rem;
  display: block;
  overflow: hidden;
  position: relative;
`;
export const BoxAuthor: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const BoxAuthorImg: StyledComponent<any, any> = styled.div`
  min-width: 4.2rem;
  max-width: 4.2rem;
  height: 4.2rem;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
`;

export const BoxAuthorAvatar: StyledComponent<any, any> = styled.div`
  display: none;

  @media all and (min-width: 526px) {
    min-width: 4.2rem;
    max-width: 4.2rem;
    display: flex;
    height: 4.2rem;
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    align-items: center;
    padding-top: 0.8rem;
    justify-content: center;
    border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostPrimmaryBg};

    svg {
      height: 3.2rem;
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
    }
  }
`;

export const AuthorData: StyledComponent<any, any> = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
`;

export const AuthorName: StyledComponent<any, any> = styled.strong`
  width: 100%;
`;

export const DateAdded: StyledComponent<any, any> = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextPrimmary};
`;

export const Title: StyledComponent<any, any> = styled.h1`
  display: flex;
  width: max-content;
  position: relative;

  span {
    opacity: 0.3;
  }

  @media all and (min-width: 768px) {
    padding: ${({ tag }: { tag?: boolean }): string => (tag ? "0" : "1.5rem 6.5rem")};
  }
`;

export const Content: StyledComponent<any, any> = styled.div`
  padding: 0;
  max-width: 100%;
  position: relative;

  @media all and (min-width: 768px) {
    padding: 0 6.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  img {
    margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  }

  img {
    width: 100%;
    display: block;
  }

  a {
    font-weight: bold;
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkPrimmary};

    &:hover {
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActivePrimmary};
    }
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
  }

  ol {
    display: block;
    margin-left: 2.8rem;
    list-style: decimal-leading-zero;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 0.6rem;
    justify-content: center;
    background-color: #404040;
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
    border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

    &::before,
    &::after {
      line-height: 0;
      font-size: 6rem;
      font-weight: bold;
      position: absolute;
    }

    &::before {
      bottom: 4rem;
      content: ",,";
      left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    &::after {
      top: 3rem;
      content: '"';
      right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    p {
      margin: 0;
      text-align: center;
    }
  }

  pre {
    p {
      font-size: 1rem;
      font-weight: bold;
      margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
      margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }
    pre {
      margin-top: 0;
      border-radius: 0.6rem;
      border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
      code {
        display: flex !important;
      }
    }
  }
`;
