import styled, { css } from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

type ArticleType = {
  last: boolean;
};

export const Article = styled.div<ArticleType>`
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostPrimmaryBg};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostPrimmaryBg};
`;

export const Img = styled.div`
  opacity: 0.5;
  height: 12rem;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorBorder};

  @media all and (min-width: 768px) {
    height: 20rem;
  }

  &::after {
    top: 0;
    left: -100%;
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    position: absolute;
    animation: loadMainImgArticle 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);
  }

  @keyframes loadMainImgArticle {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};

  .title {
    margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  }
`;

export const BoxAuthor = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const AuthorAvatar = styled.div`
  opacity: 0.2;
  display: block;
  min-width: 4.2rem;
  min-height: 4.2rem;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  box-shadow: 0 0 12px rgb(0 0 0 / 60%);
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextPrimmary};

  &::after {
    top: 0;
    left: -100%;
    content: "";
    width: 80%;
    height: 100%;
    display: block;
    position: absolute;
    animation: loadArticleAuthorAvatar 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);
  }

  @keyframes loadArticleAuthorAvatar {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;

export const AuthorData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 4.25rem);

  @media all and (min-width: 768px) {
    width: 20rem;
  }
`;

type TextType = {
  height: number;
};

export const Text = styled.div<TextType>`
  width: 100%;
  opacity: 0.2;
  display: block;
  overflow: hidden;
  position: relative;
  height: ${({ height }) => `${height}rem`};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextPrimmary};

  &::after {
    top: 0;
    left: -100%;
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    position: absolute;
    animation: loadArticleText 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);
  }

  @keyframes loadArticleText {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;
