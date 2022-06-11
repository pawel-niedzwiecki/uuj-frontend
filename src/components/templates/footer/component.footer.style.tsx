import styled, { css } from "styled-components";

export const Footer = styled.header`
  width: 100%;
  display: block;
  position: relative;
  padding: ${({ theme }) => theme.break.small} 0;
  background-color: ${({ theme }) => theme.colorFooterBg};

  .data {
    ul {
      align-items: center;
      flex-direction: column;
      padding: ${({ theme }) => theme.break.big} 0;

      @media all and (min-width: 960px) {
        align-items: flex-start;
      }
    }

    @media all and (min-width: 960px) {
      margin-left: 0;
    }
  }

  .footer {
    .logo {
      width: 100%;
      display: flex;
      padding: ${({ theme }) => theme.break.main} 0;
      justify-content: center;

      @media all and (min-width: 768px) {
        justify-content: flex-start;
      }

      svg {
        display: block;
        height: 4rem;
      }
    }

    .socialmedia {
      width: 100%;
      justify-content: center;

      @media all and (min-width: 768px) {
        justify-content: flex-start;
      }

      li {
        padding: 0 ${({ theme }) => theme.break.small} 0 0;
      }

      a {
        display: block;

        svg {
          height: 2rem;
          fill: black;
          display: block;
        }
      }
    }

    .descriptionPage {
      width: 100%;
      display: block;
      font-size: 1.2rem;
      text-align: center;
      padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main} 0;

      @media all and (min-width: 768px) {
        text-align: left;
      }
    }

    .menu {
      padding-bottom: ${({ theme }) => theme.break.big};
      li {
        width: 100%;
        display: flex;
        justify-content: center;

        @media all and (min-width: 768px) {
          justify-content: flex-start;
        }
        h6 {
          padding: ${({ theme }) => theme.break.main} 0;
        }
        padding: 0;
      }
    }
  }
`;

export const Header = styled.h4`
  width: 100%;
  display: block;
  text-align: center;
  padding-top: ${({ theme }) => theme.break.big};

  @media all and (min-width: 960px) {
    text-align: left;
  }
`;

export const ItemAdress = styled.li`
  p,
  a,
  h6 {
    font-size: 1.2rem;
  }
  max-width: max-content;
  padding: ${({ theme }) => theme.break.small} 0 0 0 !important;

  @media all and (min-width: 960px) {
    text-align: left;
  }
`;
